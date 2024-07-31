"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";
import paiement from "@/public/assets/icons/icons/payement.png";
import { useRouter, useSearchParams } from "next/navigation";

import urlFor from "@/Sanity/client";
function Step1({
  currentStep,
  setCurrentStep,
  selectedPhone,
  handlePhoneSelect,
  data,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleNext = () => {
    if (!inputValue) {
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="w-[80%] ">
      <div className="flex flex-col items-center justify-center mx-auto mt-6 mb-4 text-xs font-bold text-center gap-y-4 ">
        <div className="flex items-center gap-x-2">
          <Image className="w-6 h-6 " src={paiement} alt="paiment" />
          <span>
            Chez Prestige Phone, pas de paiement avant l’intervention !
          </span>
        </div>
        <h2 className="text-4xl  font-[900] text-center flex justify-center">
          Sélectionnez votre appareil
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-5">
        {data?.map((option, index) => (
          <div key={index}>
            <div
              className={`mx-auto max-w-[80%]  border py-2 cursor-pointer rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg  
              ${
                selectedPhone === option
                  ? "border-MainOrange"
                  : "border-gray-300"
              }`}
              onClick={() => handlePhoneSelect(option)}
            >
              <div className="flex items-center justify-center mb-2 ">
                {option?.image && (
                  <Image
                    src={urlFor(option.image).url()}
                    alt={option.title}
                    className="object-contain h-[100px]"
                    width={200}
                    height={100}
                  />
                )}
              </div>
            </div>
            <p className="mt-4 text-xs text-center hover:text-MainOrange">
              {option.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center mb-8">
        <div className="relative z-0 mb-5 group w-[300px] flex flex-col justify-center items-start mx-auto">
          <input
            type="text"
            name="search"
            id="search"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-MainOrange peer"
            placeholder=" "
            onChange={(e) => setInputValue(e.target.value)}
          />
          <label
            htmlFor="search"
            className="peer-focus:font-medium absolute text-sm transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-MainOrange peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Saisissez ici une autre marque
          </label>
        </div>
        {inputValue && (
          <a
            onClick={handleNext}
            className="px-4 py-2 my-2 text-white rounded-md cursor-pointer bg-MainOrange"
          >
            {" "}
            Continue{" "}
          </a>
        )}
      </div>
    </div>
  );
}

export default React.memo(Step1);
