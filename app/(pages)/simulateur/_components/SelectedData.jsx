import Image from "next/image";

import React from "react";
import update from "@/public/assets/images/icon-modifier.png";
function SelectedData({
  setCurrentStep,
  selectedPhone,
  selectedModel,
  selectedProblems,
}) {
  const handleStepClick = (stepNumber) => {
    if (stepNumber == 2 && Object.keys(selectedPhone).length == 0) {
      return;
    } else if (stepNumber == 3 && Object.keys(selectedModel).length == 0) {
      return;
    } else if (stepNumber == 4 && Object.keys(selectedProblems).length == 0) {
      return;
    }

    setCurrentStep(stepNumber);
  };

  function truncateString(string, maxLength) {
    if (string.length <= maxLength) {
      return string;
    } else {
      return string.slice(0, maxLength) + "...";
    }
  }

  function calculateTotal() {
    let totalPrice = 0;
    let hasSurDevis = false;

    selectedProblems.forEach((problem) => {
      if (problem.price === "Sur Devis") {
        hasSurDevis = true;
      } else {
        totalPrice += parseFloat(problem.price);
      }
    });

    if (hasSurDevis) {
      return "Sur Devis";
    }

    return `${totalPrice.toFixed(2)} €`;
  }

  return (
    <div className=" md:w-[400px] w-full px-8 mb-4 md:mb-0">
      <div className="flex justify-between mt-8 border-black ">
        <h2 className="font-bold">Devis</h2>
      </div>
      <div className="flex flex-col justify-between mt-8 border-b-2 border-black">
        <div className="flex flex-row justify-between">
          <h3 className="text-xs">Marque :</h3>

          <Image
            src={update}
            alt="update"
            className="object-contain w-5 h-5 cursor-pointer"
            onClick={() => handleStepClick(1)}
          />
        </div>
        <p
          className={`mb-3 font-bold ms-6 ${
            selectedPhone?.title && "selected"
          }`}
        >
          {selectedPhone?.title}
        </p>
      </div>
      <div className="flex flex-col justify-between mt-8 border-b-2 border-black">
        <div className="flex flex-row justify-between">
          <h3>Modèle :</h3>

          <Image
            src={update}
            alt="update"
            className="object-contain w-5 h-5 cursor-pointer"
            onClick={() => handleStepClick(2)}
          />
        </div>
        <p
          className={`mb-3 font-bold ms-6 ${
            selectedModel?.title && "selected"
          }`}
        >
          {selectedModel?.title}
        </p>
      </div>
      <div className="mt-4 ">
        <div className="flex flex-row justify-between ">
          <h3>Réparations :</h3>

          <Image
            src={update}
            alt="update"
            className="object-contain w-5 h-5 cursor-pointer"
            onClick={() => handleStepClick(3)}
          />
        </div>
      </div>
      {/* problems */}
      <div className="border-b-2 border-black  pb-2">
        {selectedProblems?.map((problem, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between ">
              <p
                className={` font-bold text-xs ms-6 ${
                  problem?.title && "selected"
                }`}
              >
                {problem?.title && truncateString(problem.title, 11)}
              </p>
              <p className="mt-5 text-xs text-center ">
                {/* {problem?.price} {problem?.price !== "Sur Devis" ? "€" : ""} */}
                Sur Devis
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-between mt-8 border-black ">
        <h3>Total</h3>
        {/* <p>{calculateTotal()} </p> */}
        <p>Sur Devis</p>
      </div>
    </div>
  );
}

export default SelectedData;
