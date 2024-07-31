"use client";
import Image from "next/image";
import React, { useState } from "react";
import icon from "../../../public/assets/images/question-bold.png";

function Index() {
  const [openIndex, setOpenIndex] = useState(null);

  const dataArray = [
    {
      title: "Où êtes-vous situé ?",
      description:
        " Le siège social est basé à Paris, au 58 rue de Monceau. Nous sommes là pour vous aider à résoudre n’importe quel problème avec votre ordinateur ou votre smartphone directement dans notre atelier à Pantin.",
    },
    {
      title: "Faites-vous uniquement de la réparation de smartphone ?",
      description:
        "Bien sûr que non ! Nous vous proposons aussi un service de réparation pour vos tablettes, PC portables et Macbook.",
    },
    {
      title: "Quels types de smartphones réparez-vous ?",
      description:
        "Nous proposons un service de réparation de smartphones pour toutes les marques.",
    },
    {
      title: "Les devis sont-ils gratuits ?",
      description:
        "Les devis sont gratuits. Nous vous invitons à venir nous rencontrer à notre centre de réparation.",
    },
    {
      title: "Comment pouvons-nous vous contacter ?",
      description:
        "Vous pouvez nous contacter via notre téléphone au 0780801455 ou sur notre boite mail : prestigephone@gmail.com",
    },
    {
      title: "Avez-vous des réseaux sociaux ?",
      description:
        "Vous pouvez-nous retrouver sur Facebook, Instagram et Whatsapp.",
    },
  ];

  const toggleBox = (index) => {
    if (openIndex === index) {
      // If the same box is clicked again, close it
      setOpenIndex(null);
    } else {
      // Close the previously opened box and open the new one
      setOpenIndex(index);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full sm:max-w-[1600px] ">
        <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 md:pb-3 pb-10 mt-3">
          <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
            {dataArray.map((item, index) => (
              <div
                key={index}
                className="w-full rounded mt-8 flex flex-col items-center"
              >
                <div
                  onClick={() => toggleBox(index)}
                  className={`w-full flex items-center px-5 py-2 justify-between border-[#3E3E3E] border-2 rounded-md cursor-pointer bg-white relative z-10`}
                >
                  {/* question section */}
                  <div className="flex items-center justify-around gap-x-2">
                    <Image src={icon} className="w-10 h-10" alt="icon" />
                    <h2 className="text-xl font-medium text-gray-800">
                      {item.title}
                    </h2>
                  </div>
                  {openIndex === index ? (
                    <svg
                      role="button"
                      aria-label="close dropdown"
                      width="25"
                      height="15"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5L5 1L9 5"
                        stroke="#4B5563"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="25"
                      height="15"
                      role="button"
                      aria-label="open dropdown"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#4B5563"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                {openIndex === index && (
                  <p
                    className={`w-full bg-[#3E3E3E] px-5 rounded-b-md text-sm py-6 -translate-y-1 text-white relative z-0 fade-in`}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
