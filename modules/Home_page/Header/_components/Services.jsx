"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// icons
import { IoChevronDown } from "react-icons/io5";
import appleIcon from "@/public/assets/images/apple-icon.svg";

// Sanity
import { FetchData } from "@/Sanity/client";
import urlFor from "@/Sanity/client";

// Spinner
import { ThreeDots } from "react-loader-spinner";

export default function Services() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [navActive, setNavActive] = useState(0);

  const bodies = [repairs, modes, cities];
  const Body = bodies[navActive];

  // Clicking outside of div
  const wrapperRef = useRef(null);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropdown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setShowDropdown((prev) => !prev)}
        className={`flex items-center gap-2 2xl:text-lg text-base lg:text-[#3E3E3E] text-white relative z-50 before:content-[''] before:absolute before:h-2 before:bg-MainOrange before:bottom-[2px] before:rounded-xl before:-z-10 lg:hover:before:w-1/2 ${
          showDropdown ? "lg:before:w-1/2" : "lg:before:w-0"
        } before:duration-300`}
      >
        <span>Services</span>
        <IoChevronDown
          className={`${showDropdown ? "scale-y-[-1]" : "scale-y-1"}`}
        />
      </button>

      {showDropdown && (
        <div className="lg:absolute fixed lg:top-14 bottom-0 left-0 lg:left-[50%] lg:-translate-x-[50%] lg:w-[700px] w-full h-[500px] bg-white lg:rounded-3xl rounded-xl lg:rounded-t-none rounded-b-none lg:rounded-b-3xl shadow-[0_0_16px_rgba(0,0,0,0.19)] z-[999]">
          <div className="w-full h-[50px] flex items-center justify-evenly border-b border-slate-100 border-solid">
            {["Réparations", "Modes de réparation", "Villes"]?.map(
              (item, key) => (
                <button
                  key={key}
                  className={`w-full h-full max-w-[200px] text-gray-700 lg:text-base text-sm ${
                    key === navActive &&
                    "border-b-2 border-MainOrange border-solid"
                  }`}
                  onClick={() => setNavActive(key)}
                >
                  {item}
                </button>
              )
            )}
          </div>
          <Body />
        </div>
      )}
    </div>
  );
}

function repairs() {
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      setLoading(true);
      const query = `*[_type=='device'] | order(_createdAt asc) [0...6]`;
      try {
        const devices = await FetchData(query);
        setDevices(devices);
      } catch (error) {
        console.error("Error fetching devices:", error);
        setDevices([]);
      }
      setLoading(false);
    };
    fetchDevices();
  }, []);
  return (
    <div className="w-full flex flex-col gap-5 p-5">
      <h2 className="font-medium text-gray-700 text-base">
        Réparations les plus populaires:
      </h2>
      {loading ? (
        <div className="w-full h-[350px] flex justify-center items-center">
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#E65411"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="w-full h-[350px] grid sm:grid-cols-3 grid-cols-2 gap-x-3 gap-y-5 overflow-y-auto">
          {devices?.map((item, key) => (
            <div key={key} className="flex flex-col items-center gap-2">
              {item?.image && (
                <Image
                  src={urlFor(item?.image).url()}
                  width={500}
                  height={600}
                  className="h-[100px] w-[100px] object-contain"
                  alt={item.title}
                />
              )}

              <h1 className="text-MainOrange font-medium capitalize text-sm">
                {item.title}
              </h1>
              <Link
                href={`/reparation/${item?.slug?.current}`}
                className="text-white bg-MainOrange sm:text-sm text-xs font-medium px-3 py-1 rounded-md hover:opacity-90 duration-300"
              >
                Tous les {item?.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function modes() {
  const modes = [
    {
      title: "Réparation à domicile",
      description:
        "Un technicien de prestige phone se déplace jusqu'à vous pour réparer vos téléphones et tablettes : à votre domicile, au bureau ou encore dans un lieu public. À vous de choisir !",
      slug: "reparation-a-domicile",
    },
    {
      title: "Réparation dans notre atelier",
      description:
        "Apportez-nous vos téléphones et tablettes dans notre atelier situé dans le centre ville de Pantin.",
      slug: "reparation-dans-notre-atelier",
    },
    {
      title: "Réparation à distance",
      description:
        "Si malheureusement vous n'êtes pas situé dans notre zone d'invention, pas de panique, il vous reste la possibilité de nous envoyer vos appareils par colis.",
      slug: "reparation-a-distance",
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <h2 className="font-medium text-gray-700 text-base p-5">
        Trois modes de réparation:
      </h2>
      <div className="w-full h-[350px] flex flex-col overflow-y-auto divide-y divide-solid">
        {modes?.map((item, key) => (
          <Link
            href={`/modes-de-reparation/${item?.slug}`}
            key={key}
            className="flex flex-col items-center gap-2 p-5 hover:bg-slate-100/50"
          >
            <Image src={appleIcon} className="w-16" alt={item?.title} />
            <h1 className="text-MainOrange font-medium capitalize text-lg">
              {item?.title}
            </h1>
            <p className="text-center text-slate-500 text-sm font-light">
              {item?.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function cities() {
  const [loading, setLoading] = useState(false);
  const [streets, setStreets] = useState([]);

  useEffect(() => {
    const fetchStreets = async () => {
      setLoading(true);
      const query = `*[_type=='street']| order(_createdAt asc){
        slug,
        street,
        city->{
          city,
          slug
        }
      }`;
      try {
        const streetsData = await FetchData(query);
        const organizedStreets = [];

        streetsData.forEach(({ street, slug, city }) => {
          const streetSlug = slug.current;
          const cityName = city.city;
          const citySlug = city.slug.current;

          // Check if the city already exists in the organizedStreets array
          const existingCityIndex = organizedStreets.findIndex(
            (item) => item.city === cityName
          );

          // If city doesn't exist, add it to the organizedStreets array
          if (existingCityIndex === -1) {
            organizedStreets.push({
              city: cityName,
              slug: citySlug,
              streets: [{ street, slug: streetSlug }],
            });
          } else {
            // If city already exists, push the street to its streets array
            organizedStreets[existingCityIndex].streets.push({
              street,
              slug: streetSlug,
            });
          }
        });
        setStreets(organizedStreets);
      } catch (error) {
        console.error("Error fetching streets:", error);
        setStreets([]);
      }
      setLoading(false);
    };
    fetchStreets();
  }, []);

  return (
    <div className="w-full flex flex-col gap-5 p-5 text-gray-700 ">
      <h2 className="font-medium text-base">Nous nous déplaçons chez vous !</h2>
      {loading ? (
        <div className="w-full h-[350px] flex justify-center items-center">
          <ThreeDots
            visible={true}
            height="50"
            width="50"
            color="#E65411"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="w-full h-[350px] flex flex-col gap-5 overflow-y-auto">
          {streets?.map((item, key) => (
            <div key={key} className="w-full flex flex-col gap-5">
              <h6 className="text-sm font-semibold capitalize">
                - {item?.city}
              </h6>
              <ul className="w-full grid sm:grid-cols-4 grid-cols-3 gap-x-2 gap-y-5 font-light text-sm">
                {item?.streets?.map((subItem, subKey) => (
                  <li key={subKey}>
                    <Link
                      href={`/ville/${item?.slug}/${subItem?.slug}`}
                      className="hover:text-MainOrange"
                    >
                      {subItem?.street}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
