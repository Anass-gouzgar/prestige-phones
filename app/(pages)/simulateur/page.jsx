"use client";
import React, { useState, useEffect, useCallback } from "react";
import Header from "./_components/Header";
import SelectedData from "./_components/SelectedData";
import Step1 from "./_components/Steps/Step1";
import Step2 from "./_components/Steps/Step2";
import Step3 from "./_components/Steps/Step3";
import Step4 from "./_components/Steps/Step4";
import ThankYou from "./_components/ThankYou";
import { FetchData } from "@/Sanity/client";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("@/modules/Home_page/Header/index.jsx"), {
    loading: () => <p></p>,
  }),
  Footer = dynamic(() => import("@/modules/Home_page/Footer/index.jsx"), {
    loading: () => <p></p>,
  });

function Page({ params, searchParams }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isfinish, setIsfinish] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState({});
  const [selectedModel, setSelectedModel] = useState({});
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [extraProblem, setextraProblem] = useState("");
  const [method, setmethod] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    phone_nbr: "",
    email: "",
    code_postal: "",
    isDeliveryOption: false,
  });
  const [data, setData] = useState([]);

  const router = useRouter();
  // const searchParams = useSearchParams();
  const phone = searchParams.phone;
  const model = searchParams.model;
  useEffect(() => {
    // init from in the first step
    if (currentStep == 1) {
      setSelectedModel({});
      setSelectedProblems([]);
    }
  }, [currentStep]);

  useEffect(() => {
    if (phone) {
      const selectedPhone = data.find((item) => item.title === phone);
      setSelectedPhone(selectedPhone);
      setCurrentStep(2);
    }
    if (model) {
      const selectedModel = selectedPhone?.models?.find(
        (item) => item.title === model
      );
      setSelectedModel(selectedModel);
      setCurrentStep(3);
    }
  }, [data, phone, model, selectedPhone]);

  const handlePhoneSelect = useCallback(
    (option) => {
      if (phone) {
        const foundPhone = data.find((item) => item.title === phone);
        if (foundPhone) {
          setSelectedPhone(foundPhone);
        } else {
          console.error("Phone not found in data:", phone);
        }
      } else {
        setSelectedPhone(option);
      }
      setCurrentStep((currentStep) =>
        currentStep < 4 ? currentStep + 1 : currentStep
      );
      router.push(`?phone=${option.title}`);
    },
    [router, phone, data]
  );

  const HandleModelSelect = useCallback(
    (option) => {
      setSelectedModel(option);
      setCurrentStep((currentStep) =>
        currentStep < 4 ? currentStep + 1 : currentStep
      );
      router.push(`?phone=${selectedPhone.title}&model=${option.title}`);
    },
    [router, selectedPhone]
  );

  const HandleProblemSelect = useCallback((problem) => {
    setSelectedProblems((prevProblems) => {
      const problemExists = prevProblems.some((p) => p.title === problem.title);

      if (problemExists) {
        return prevProblems.filter((p) => p.title !== problem.title);
      } else {
        return [...prevProblems, problem];
      }
    });
  }, []);

  const resetForm = useCallback(() => {
    setUser({
      first_name: "",
      last_name: "",
      phone_nbr: "",
      email: "",
      code_postal: "",
      isDeliveryOption: false,
    });
    setextraProblem("");
  }, []);

  const validateFormData = useCallback(() => {
    return (
      user.first_name &&
      user.last_name &&
      user.phone_nbr &&
      user.email &&
      user.code_postal
    );
  }, [user]);

  const HandleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setIsLoading(true);

      if (!validateFormData()) {
        console.log("Form data is not valid");
        setIsLoading(false);

        return;
      }

      const formData = new FormData();
      formData.append("first_name", user.first_name);
      formData.append("last_name", user.last_name);
      formData.append("phone_nbr", user.phone_nbr);
      formData.append("email", user.email);
      formData.append("code_postal", user.code_postal);

      formData.append("phone", selectedPhone.title);
      formData.append("model", selectedModel.title);

      selectedProblems.forEach((problem, index) => {
        formData.append(`problems[${index}]`, problem.title);
      });

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          toast("Server Error ...! ", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
          });
          setIsLoading(false);
          return;
        }
        resetForm();
        setIsfinish(true);
        setIsLoading(false);
      } catch (error) {
        toast("Server Error ...! ", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
        setIsLoading(false);
      }
    },
    [user, selectedPhone, selectedModel, selectedProblems]
  );

  useEffect(() => {
    const fetchDevices = async () => {
      const query = `*[_type=='device']`;
      try {
        setIsLoading(true);
        const devices = await FetchData(query);
        setData(devices);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching devices:", error);
        setIsLoading(false);
      }
    };

    fetchDevices();
  }, []);

  return (
    <div className="mx-auto">
      <Nav className="" />

      <div className="flex items-center justify-center w-full mx-auto mt-24">
        {isLoading ? (
          <div>...loding</div>
        ) : isfinish ? (
          <ThankYou />
        ) : (
          <div className="mx-auto md:w-full sm:mt-10 mt-20">
            <Header
              selectedPhone={selectedPhone}
              selectedModel={selectedModel}
              setSelectedProblems={selectedProblems}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
            <div className="flex flex-col items-center justify-center mx-auto md:flex-row max-w-[1300px] md:px-10  ">
              {/* PHONE */}
              {currentStep == 1 && (
                <Step1
                  currentStep={currentStep}
                  data={data}
                  selectedPhone={selectedPhone}
                  handlePhoneSelect={handlePhoneSelect}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {/* MODEL */}
              {currentStep == 2 && (
                <Step2
                  currentStep={currentStep}
                  data={selectedPhone?.models}
                  selectedModel={selectedModel}
                  HandleModelSelect={HandleModelSelect}
                  setCurrentStep={setCurrentStep}
                />
              )}
              {/* PROBLEM */}
              {currentStep == 3 && (
                <Step3
                  currentStep={currentStep}
                  data={selectedModel?.problems}
                  selectedProblems={selectedProblems}
                  HandleProblemSelect={HandleProblemSelect}
                  setCurrentStep={setCurrentStep}
                  extraProblem={extraProblem}
                  setextraProblem={setextraProblem}
                />
              )}
              {/*  FORM */}
              {currentStep == 4 && (
                <Step4
                  extraProblem={extraProblem}
                  setextraProblem={setextraProblem}
                  method={method}
                  setmethod={setmethod}
                  HandleSubmit={HandleSubmit}
                  setUser={setUser}
                  setCurrentStep={setCurrentStep}
                />
              )}
              <SelectedData
                selectedPhone={selectedPhone}
                selectedModel={selectedModel}
                selectedProblems={selectedProblems}
                setCurrentStep={setCurrentStep}
              />
            </div>
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </div>
  );
}

export default Page;
