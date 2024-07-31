import Image from "next/image";
import React from "react";
import desktopMap from "@/public/assets/images/Map/desktop_map.svg";
import mobileMap from "@/public/assets/images/Map/mobile_map.svg";
import icon from "@/public/assets/images/iphone-map-icon.svg";

function index() {
  return (
    <div className="flex flex-col items-center gap-16 px-2 py-16">
      <div className="text-3xl text-[#3E3E3E] font-extrabold text-center">
        <h1>Prestige Phone près de chez vous !</h1>
      </div>
      {/* container */}
      <div className="max-w-[1300px] w-full h-auto flex lg:flex-row flex-col-reverse justify-center items-center">
        {/* 1 */}
        <div className="sm:h-[450px] h-auto max-w-[360px] w-full rounded-xl bg-white p-4 text-center custom-shadow hover:scale-[1.02] duration-200">
          <div className="mx-auto flex h-24 mb-0 -translate-y-16 transform items-center justify-center rounded-full ">
            <Image
              src={icon}
              alt="Profile"
              width={24}
              height={24}
              className=" rounded-full w-full h-full  "
            />
          </div>
          <h1 className="text-darken mb-3 -mt-8 md:-mt-0 text-xl font-bold lg:px-14">
            Pantin
          </h1>
          <p className="px-4 mt-3 ">
            Notre équipe est là pour vous accueillir directement dans notre
            atelier à Pantin si vous souhaitez effectuer une réparation sur
            place. Une équipe de professionnels de la réparation de smartphones
            / ordinateurs est à votre disposition au 21 Av. Anatole France,
            93500 Pantin, France.
          </p>
        </div>
        {/* desktop map img */}
        <div className="sm:h-[450px] h-[350px] w-[400px] bg-white hidden lg:block -z-20">
          <Image
            src={desktopMap}
            alt="map"
            className="object-contain h-full "
          />
        </div>
        {/* mobile map img */}
        <div className="h-[350px] max-w-[400px] w-full bg-white lg:hidden -z-20">
          <Image src={mobileMap} alt="map" className="object-contain h-full" />
        </div>
        {/* 3 */}
        <div className="sm:h-[450px] h-auto max-w-[360px] w-full rounded-xl bg-white p-4 text-center custom-shadow hover:scale-[1.02] duration-200">
          <div className="mx-auto flex h-24 mb-0 -translate-y-16 transform items-center justify-center rounded-full ">
            <Image
              src={icon}
              alt="Profile"
              width={24}
              height={24}
              className=" rounded-full w-full h-full"
            />
          </div>
          <h1 className="text-darken -mt-8 md:-mt-0 text-xl font-bold lg:px-14">
            Paris & Petite couronne
          </h1>
          <p className="px-4 mt-3">
            Un technicien de prestige phone se déplace jusqu'à vous pour réparer
            vos téléphones et tablettes : à votre domicile, au bureau ou encore
            dans un lieu public dans Paris et sa petite couronne.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
