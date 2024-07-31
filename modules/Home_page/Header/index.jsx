"use client";
import React, { useState, useEffect, Fragment } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/Logo/Logo.svg";
import NavBarLinks from "./_components/navBarLinks.jsx";
import Marquee from "react-fast-marquee";

// icons
import xIcon from "@/public/assets/icons/icons/x.svg";

// components
import Services from "./_components/Services.jsx";

const Index = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const headerClass = scrolling ? "bg-white shadow-xl" : "";

  const items = [
    {
      name: "Accueil",
      url: "/",
    },
    {
      name: "Offre pro",
      url: "/offre-pro",
    },
    {
      name: "Support",
      url: "/support",
    },
    {
      name: "Devis express",
      url: "/support/#contact",
    },
  ];

  return (
    <nav
      className={`flex flex-col justify-center items-center mx-auto fixed top-0 left-0 right-0 z-50 ${headerClass}`}
    >
      <div className="w-full h-[50px] bg-orange-500 flex justify-center items-center">
        <Marquee className="w-full text-white" autoFill={true}>
          <span className="px-10">
            Profitez de 10% de réduction sur vos demandes de réparation en ligne
            !
          </span>
          <span className="px-10">
            Remplissez notre formulaire de demande de réparation et bénéficiez
            automatiquement d'une remise de 10% sur nos services.
          </span>
        </Marquee>
      </div>
      <div className="w-full flex justify-center items-center mx-auto p-6">
        <div className="w-full flex justify-between items-center max-w-[1300px]">
          <Link href="/">
            <Image src={logo} alt="Logo" className="max-w-[280px] w-full" />
          </Link>

          <div className="flex items-center gap-7">
            <ul className="hidden lg:flex items-center 2xl:gap-7 gap-4 2xl:text-lg text-base text-[#3E3E3E]">
              {items?.map((item, key) => (
                <Fragment key={key}>
                  <li>
                    <Link
                      href={item?.url}
                      className="relative z-50 before:content-[''] before:absolute before:w-0 before:h-2 before:bg-MainOrange before:bottom-0 before:rounded-xl before:-z-10 hover:before:w-1/2 before:duration-300"
                    >
                      {item?.name}
                    </Link>
                  </li>
                  {key === 0 && <Services />}
                </Fragment>
              ))}
            </ul>
          </div>

          {/* Menu Mobile */}
          <div
            className={`lg:hidden block absolute w-[80%] max-w-[400px] right-0 top-0 bottom-0 h-screen bg-MainOrangeLight text-white shadow-2xl z-[999] ${
              isOpen ? "hidden" : "block"
            }`}
          >
            <div className="w-full p-6 flex justify-end">
              <button onClick={() => setIsOpen(true)}>
                <Image src={xIcon} className="w-10" alt="close-menu icon" />
              </button>
            </div>
            <div>
              <NavBarLinks items={items} />
            </div>
          </div>
          {/* right buttons */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              {/* tel button */}
              <button className="hidden lg:flex text-MainOrange text-base hover:underline font-medium">
                <a href="tel:0780801455">07 80 80 14 55</a>
              </button>
              {/* contactez nous button */}
              <button>
                <Link
                  href="/simulateur"
                  className="hidden lg:flex justify-center items-center bg-gradient-to-r from-MainOrange to-MainOrangeLight w-48 h-10 text-[16px] text-white px-4 rounded-md hover:-translate-y-1 hover:shadow-lg duration-300"
                >
                  Contactez-Nous
                </Link>
              </button>
            </div>

            {/* Hamburger menu icon for mobile */}
            <div className="block lg:hidden">
              <span
                className="cursor-pointer text-gray-200 hover:text-gray-400 transition-all"
                onClick={toggleMenu}
              >
                <RxHamburgerMenu size={40} className="text-MainOrange" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
