"use client";
import React, { useState } from "react";

function Step4({
  extraProblem,
  setextraProblem,
  method,
  setmethod,
  user,
  setUser,
  HandleSubmit,
  setCurrentStep,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const SendWith = ["Par email", "Par téléphone", "Peu importe"];

  const handleMethodSelect = (method) => {
    setmethod(method);
  };

  const handleCheckboxChange = () => {
    setUser((prevUser) => ({
      ...prevUser,
      isDeliveryOption: !prevUser.isDeliveryOption,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={HandleSubmit} className="w-[95%] px-4F">
      <div className="mx-auto mt-8 md:px-6">
        <h2 className="text-4xl font-[900] text-center">Prenons rendez-vous</h2>
        <div className="mx-auto">
          <p className="mt-5 text-center">
            Ces informations resteront confidentielles et seront uniquement
            utilisées afin de répondre à votre demande
          </p>
          <div className="flex flex-col mt-10 space-y-4">
            {/* First Row */}
            <div className="flex flex-col justify-between mt-4 md:flex-row">
              <div className="flex flex-col w-full pr-0 md:w-1/2 md:pr-2">
                <label htmlFor="nom">Votre nom</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={user?.first_name}
                  onChange={handleInputChange}
                  className="border-b-2 border-black outline-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full pl-0 mt-4 md:w-1/2 md:pl-2 md:mt-0">
                <label htmlFor="prenom"> Votre prénom</label>
                <input
                  type="text"
                  id="prenom"
                  name="last_name"
                  value={user?.last_name}
                  onChange={handleInputChange}
                  className="border-b-2 border-black outline-none"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col justify-between mt-4 md:flex-row">
              <div className="flex flex-col w-full pr-0 md:w-1/2 md:pr-2">
                <label htmlFor="telephone">Votre n° de téléphone</label>
                <input
                  type="tel"
                  id="telephone"
                  name="phone_nbr"
                  value={user?.phone_nbr}
                  onChange={handleInputChange}
                  pattern="^(?:(?:\+|00)212|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
                  required
                  className="border-b-2 border-black outline-none"
                />
              </div>
              <div className="flex flex-col w-full pl-0 md:w-1/2 md:pl-2">
                <label htmlFor="email">Votre email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user?.email}
                  onChange={handleInputChange}
                  className="border-b-2 border-black outline-none"
                  required
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-col justify-between mt-4 md:flex-row">
              <div className="flex flex-col w-full pr-0 md:w-1/2 md:pr-2">
                <label htmlFor="code-postal">Code postal</label>
                <input
                  type="text"
                  id="code-postal"
                  name="code_postal"
                  value={user?.code_postal}
                  onChange={handleInputChange}
                  pattern="[0-9]{5}"
                  required
                  className="border-b-2 border-black outline-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center mt-6">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    onChange={handleCheckboxChange}
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
      </div>

      <div className="mt-14">
        <h1 className="text-xl font-[900] text-center">
          Vérifiez les informations additionnelles de votre appareil
        </h1>
        <div>
          <div className="relative z-0 mb-5 group w-[300px] flex flex-col justify-center items-start mx-auto mt-8 ">
            <input
              type="text"
              name="search"
              id="search"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none
              focus:outline-none focus:ring-0 focus:border-MainOrange peer"
              placeholder=" "
              value={extraProblem}
              onChange={(e) => setextraProblem(e.target.value)}
            />
            <label
              htmlFor="search"
              className="peer-focus:font-medium absolute text-sm transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-MainOrange peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Saisissez ici une autre marque
            </label>
          </div>

          <div className="flex flex-row justify-center gap-2 mb-8">
            <a
              onClick={() => {
                setCurrentStep((prev) => prev - 1);
              }}
              className="px-4 py-2 my-2 text-black bg-gray-200 rounded-md cursor-pointer"
            >
              Retour
            </a>
            <button className="px-4 py-2 my-2 text-white rounded-md cursor-pointer ms-4 bg-MainOrange">
              Valider ma demande
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default React.memo(Step4);
