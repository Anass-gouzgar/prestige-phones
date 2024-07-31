import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "@/public/assets/images/partners/Le_royal_monceau.png";
import logo2 from "@/public/assets/images/partners/dior.png";
import logo3 from "@/public/assets/images/partners/fourseasons.jpeg";
import logo4 from "@/public/assets/images/partners/saint_laurent.svg";
import Image from "next/image";

function Index() {
  const Images = [logo1, logo2, logo3, logo4];

  return (
    <div className="bg-white flex flex-col items-center gap-7 py-7">
      {/* title */}
      <div className="flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-semibold text-center text-[#3E3E3E]">
          Adapté à tous les profils
        </h1>
        <h4 className="text-MainOrange">Ils nous font confiance</h4>
      </div>

      {/* logos */}
      <div className="flex items-center justify-center w-full md:max-w-[1000px]">
        <Marquee speed={30} pauseOnHover={true} autoFill>
          {Images.map((image, i) => (
            <div key={i} className="mr-16 p-2">
              <Image
                src={image}
                alt={`logo-${i}`}
                className="object-contain max-w-[200px] max-h-[80px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Index;
