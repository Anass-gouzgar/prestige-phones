"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function Step({
  StepIndex,
  title,
  options,
  selectedOptions,
  handleOptionSelect,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [data, SetData] = useState([]);

  useEffect(() => {
    StepIndex == 1 ? SetData(options) : [];
    if (selectedOptions && Object.keys(selectedOptions).length > 0) {
      if (StepIndex == 1) {
        SetData(selectedOptions);
      } else if (StepIndex == 2) {
        SetData(selectedOptions.models.option);
      }
    }
  }, [selectedOptions, data, StepIndex, options]);

  return (
    <div className="px-6 mt-8">
      <h2 className="text-lg font-[900] text-center">{title}</h2>
      {StepIndex == 4 ? (
        <div className="mx-auto ">
          <p className="mt-5">
            Ces informations resteront confidentielles et seront uniquement
            utilisées afin de répondre à votre demande
          </p>
          <div className="flex flex-col mt-10 space-y-4">
            {/* First Row */}
            <div className="flex flex-row justify-between mt-4 ">
              <div className="flex flex-col w-1/2 pr-2">
                <label htmlFor="nom">Votre nom</label>
                <input
                  type="text"
                  id="nom"
                  className="border-b-2 border-black outline-none"
                />
              </div>
              <div className="flex flex-col w-1/2 pl-2">
                <label htmlFor="prenom"> Votre prénom</label>
                <input
                  type="text"
                  id="prenom"
                  className="border-b-2 border-black outline-none"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-col w-1/2 pr-2 mt-4">
                <label htmlFor="telephone">Votre n° de téléphone</label>
                <input
                  type="text"
                  id="telephone"
                  className="border-b-2 border-black outline-none"
                />
              </div>
              <div className="flex flex-col w-1/2 pl-2 mt-4">
                <label htmlFor="email">Votre email</label>
                <input
                  type="text"
                  id="email"
                  className="border-b-2 border-black outline-none"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-col w-1/2 pr-2 mt-4">
                <label htmlFor="code-postal">Code postal</label>
                <input
                  type="text"
                  id="code-postal"
                  className="border-b-2 border-black outline-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center mt-6">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-MainOrange"></div>
                  <span
                    className={`ms-3 text-sm font-medium  ${
                      isChecked ? "text-MainOrange" : ""
                    }`}
                  >
                    Vous préférez nous apporter votre appareil à notre atelier
                    au{" "}
                    <span className="font-[900]">
                      21 Av. Anatole France, 93500 Pantin, France
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`grid grid-cols-1   gap-4    mt-10   
      ${StepIndex == 1 ? "md:grid-cols-5" : "md:grid-cols-4 "} 
      
      `}
        >
          {data.map((option, index) => (
            // card
            <div key={index}>
              <div>
                <div
                  key={index}
                  className={` border py-2 cursor-pointer  rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg  
                  ${StepIndex == 3 ? " w-24 h-16" : ""}
            ${
              selectedOptions === option
                ? "border-MainOrange"
                : "border-gray-300"
            }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.image ? (
                    <div className="flex items-center justify-center mb-2 ">
                      <Image
                        src={option.image}
                        alt={option.title}
                        className={`object-contain ${
                          StepIndex == 3 ? " w-10 h-10" : " h-[100px]"
                        }`}
                      />
                    </div>
                  ) : (
                    <p className="text-xs text-center">{option.title}</p>
                  )}
                </div>
                {option.image && (
                  <p
                    className={`text-xs hover:text-MainOrange mt-4  ${
                      StepIndex == 3 ? "" : "text-center"
                    }`}
                  >
                    {option.title}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* <div className="relative mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="text-black border-b-2 border-black outline-none "
      />
      <label
      className="absolute "
      >
        Saisissez ici une autre marque
      </label>
    </div> */}
    </div>
  );
}

export default Step;
