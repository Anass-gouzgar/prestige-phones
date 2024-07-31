import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import paiement from "@/public/assets/images/paiement.png";

function Header({
  currentStep,
  setCurrentStep,
  selectedPhone,
  selectedModel,
  setSelectedProblems,
}) {
  const steps = [
    { number: 1, title: "Sélectionnez votre appareil" },
    { number: 2, title: "Sélectionnez votre modèle" },
    { number: 3, title: "Sélectionnez les réparations" },
    { number: 4, title: "Indiquez vos informations" },
  ];

  const handleStepClick = (stepNumber) => {
    if (stepNumber == 2 && Object.keys(selectedPhone).length == 0) {
      return;
    } else if (stepNumber == 3 && Object.keys(selectedModel).length == 0) {
      return;
    } else if (stepNumber == 4 && setSelectedProblems.length == 0) {
      return;
    }

    setCurrentStep(stepNumber);
  };

  return (
    <div>
      <div className="flex flex-row items-baseline justify-between p-6 mx-auto max-w-[1300px]">
        <Image
          src={logo}
          alt="Logo Prestige phone"
          className="hidden h-10 w-28"
        />

        <div className="flex flex-row items-end justify-around w-full mx-auto text-base gap-x-4 ">
          {/* Render each step dynamically */}
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => handleStepClick(step.number)}
              className={`flex xl:flex-row flex-col items-center justify-center step-item mt-8 ${
                step.number <= currentStep ? "active " : "text-gray-500"
              }`}
            >
              <h1
                className={`font-[900] w-16 md:hidden -translate-y-20 
            `}
              >
                Étape {step.number}
              </h1>

              <div className="items-baseline hidden gap-2 pt-2 md:flex md:flex-row">
                <h1
                  className={` font-[900]   ${
                    step.number <= currentStep
                      ? " text-MainOrange"
                      : "text-gray-500"
                  }`}
                >
                  Étape {step.number}
                </h1>
                <p className="hidden text-xs xl:block">{step.title}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="hidden px-5 text-sm font-bold text-white transition ease-in-out delay-150 bg-MainOrange rounded-xl hover:-translate-y-1 hover:shadow-lg">
          07 80 80 14 55
        </button>
      </div>

      {/* <div className="flex flex-row font-bold text-xs gap-x-4 mx-auto mt-6 text-center w-[400px] justify-center bg-red-950 md:justify-normal items-center mb-4 ">
        <Image className="w-6 h-6 " src={paiement} alt="paiment" />
        <span>Chez Prestige Phone, pas de paiement avant l’intervention !</span>
      </div> */}
    </div>
  );
}

export default Header;
