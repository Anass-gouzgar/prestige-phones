import Link from "next/link";
import React from "react";

const ServiceCoverage = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 md:p-14 p-10 mb-10 bg-slate-100 ">
      <h1 className="md:text-5xl text-3xl font-bold max-w-[1300px] text-center ">
        Prestige Phone se déplace pour les entreprises situées dans sa zone
        d'intervention
      </h1>
      <p className="text-MainOrange text-center">
        Nous venons réparer votre smartphone dans les communes suivantes :
      </p>
      <div className=" md:space-x-10 sm:space-x-5 text-center">
        <button className="max-w-[270px] py-1 px-5 rounded-lg bg-MainOrangeLight hover:-translate-y-1 hover:shadow-xl duration-300 mt-10">
          <Link href="/ville/paris/montrouge" className=" text-white">
            Mon entreprise se trouve à
            <strong className="ml-1">Paris petite couronne</strong>
          </Link>
        </button>
        <button className="max-w-[270px] py-1 px-5 rounded-lg bg-MainOrangeLight hover:-translate-y-1 hover:shadow-xl duration-300 mt-10">
          <Link href="/ville/paris/vivienne" className="text-white">
            Mon entreprise se trouve à{" "}
            <strong className="ml-1">Bordeaux métropole</strong>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceCoverage;
