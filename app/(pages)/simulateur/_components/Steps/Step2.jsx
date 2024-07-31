"use client";
import React, { useState } from "react";
import paiement from "@/public/assets/icons/icons/payement.png";
import Image from "next/image";

function Step2({
  currentStep,
  setCurrentStep,
  selectedModel,
  HandleModelSelect,
  data,
}) {
  const [inputValue, setInputValue] = useState("");
  const HandleNext = () => {
    if (!inputValue) {
      return;
    }
    setCurrentStep(currentStep + 1);
  };
  return (
    <div className="w-[80%]">
      <div className="flex flex-col items-center justify-center mx-auto mt-6 mb-4 text-xs font-bold text-center gap-y-4 ">
        <div className="flex items-center gap-x-2">
          <Image className="w-6 h-6 " src={paiement} alt="paiment" />
          <span>
            Chez Prestige Phone, pas de paiement avant l’intervention !
          </span>
        </div>
        <h2 className="text-4xl font-[900] text-center flex justify-center">
          Sélectionnez votre Modéle
        </h2>
      </div>
      <div className="px-6 mt-8">
        <div className={`grid grid-cols-1 gap-4  mt-10  md:grid-cols-4 `}>
          {data?.map((option, index) => (
            // card
            <div key={index}>
              <div>
                <div
                  className={` border py-2 cursor-pointer  rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg  
            ${
              selectedModel === option ? "border-MainOrange" : "border-gray-300"
            }`}
                  onClick={() => HandleModelSelect(option)}
                >
                  <div className="flex items-center justify-center mb-2 ">
                    <p className="text-xs text-center">{option.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  search  */}
      <div>
        <div className="relative z-0 flex flex-col justify-center items-start mx-auto mt-24 w-full md:w-[50%] ">
          <input
            type="text"
            name="search"
            id="search"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 
             border-black appearance-none focus:outline-none focus:ring-0 focus:border-MainOrange peer "
            placeholder=" "
            onChange={(e) => setInputValue(e.target.value)}
          />

          <label
            htmlFor="search"
            className="peer-focus:font-medium absolute text-sm
          transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
          rtl:peer-focus:left-auto peer-focus:text-MainOrange
          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Saisissez ici une autre marque
          </label>
        </div>
        <div className="flex flex-row justify-center gap-2 mb-8">
          <a
            onClick={() => {
              setCurrentStep(currentStep - 1);
            }}
            className="px-6 py-2 my-2 text-black bg-gray-200 rounded-md cursor-pointer"
          >
            {" "}
            Retour{" "}
          </a>
          {inputValue && (
            <a
              onClick={() => {
                HandleNext();
              }}
              className="px-6 py-2 my-2 text-white rounded-md cursor-pointer bg-MainOrange"
            >
              {" "}
              Continue{" "}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Step2);
