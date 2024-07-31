"use client";
import React, { useState } from "react";

function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div data-hs-stepper>
      {/* Stepper Nav */}
      <ul className="relative flex flex-row gap-x-2">
        {[1, 2, 3].map((stepNumber, key) => (
          <li
            key={key}
            className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${
              stepNumber === currentStep ? "active" : ""
            }`}
            data-hs-stepper-nav-item={`{"index": ${stepNumber}}`}
            onClick={() => goToStep(stepNumber)}
          >
            <span className="inline-flex items-center text-xs align-middle min-w-7 min-h-7 group">
              <span className="flex items-center justify-center flex-shrink-0 font-medium text-gray-800 bg-gray-100 rounded-full size-7 group-focus:bg-gray-200 dark:bg-gray-700 dark:text-white dark:group-focus:bg-gray-600 hs-stepper-active:bg-blue-600 hs-stepper-active:text-white hs-stepper-success:bg-blue-600 hs-stepper-success:text-white hs-stepper-completed:bg-teal-500 hs-stepper-completed:group-focus:bg-teal-600">
                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                  {stepNumber}
                </span>
                <svg
                  className="flex-shrink-0 hidden size-3 hs-stepper-success:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-800 ms-2">
                Step11
              </span>
            </span>
            <div className="flex-1 w-full h-px bg-gray-200 group-last:hidden hs-stepper-success:bg-blue-600 hs-stepper-completed:bg-teal-600"></div>
          </li>
        ))}
        {/* End Item */}
      </ul>
      {/* End Stepper Nav */}

      {/* Stepper Content */}
      <div className="mt-5 sm:mt-8">
        {[1, 2, 3].map((stepNumber) => (
          <div
            key={stepNumber}
            data-hs-stepper-content-item={`{"index": ${stepNumber}}`}
            className={stepNumber === currentStep ? "active" : ""}
            style={{ display: stepNumber === currentStep ? "block" : "none" }}
          >
            <div className="flex items-center justify-center h-48 p-4 border border-gray-200 border-dashed bg-gray-50 rounded-xl">
              <h3 className="text-gray-500">Step {stepNumber} content</h3>
            </div>
          </div>
        ))}
        {/* Final Content */}
        <div
          data-hs-stepper-content-item='{"isFinal": true}'
          style={{ display: "none" }}
        >
          <div className="flex items-center justify-center h-48 p-4 border border-gray-200 border-dashed bg-gray-50 rounded-xl">
            <h3 className="text-gray-500">Final content</h3>
          </div>
        </div>
        {/* End Final Content */}

        {/* Button Group */}
        <div className="flex items-center justify-between mt-5 gap-x-2">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={goToPreviousStep}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm gap-x-1 hover:bg-gray-50"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back
            </button>
          )}
          {currentStep < 3 && (
            <button
              type="button"
              onClick={goToNextStep}
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-1 hover:bg-blue-700"
            >
              Next
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}
          {currentStep === 3 && (
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-1 hover:bg-blue-700"
            >
              Finish
            </button>
          )}
          {/* <button
                        type="reset"
                        className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-lg gap-x-1 hover:bg-blue-700"
                    >
                        Reset
                    </button> */}
        </div>
        {/* End Button Group */}
      </div>
      {/* End Stepper Content */}
    </div>
    /* End Stepper */
  );
}

export default Stepper;
