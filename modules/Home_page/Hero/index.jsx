"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import "@/styles/dots.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

// pictures
import picHero1 from "@/public/assets/images/hero/hero1.webp";
import picHero2 from "@/public/assets/images/hero/hero2.webp";
import picHero3 from "@/public/assets/images/hero/hero3.webp";
import picHero4 from "@/public/assets/images/hero/hero4.webp";
import picHero5 from "@/public/assets/images/hero/hero5.webp";
import picHero1Mobile from "@/public/assets/images/hero/hero1mobile.webp";
import picHero2Mobile from "@/public/assets/images/hero/hero2mobile.webp";
import picHero3Mobile from "@/public/assets/images/hero/hero3mobile.webp";
import picHero4Mobile from "@/public/assets/images/hero/hero4mobile.webp";
import picHero5Mobile from "@/public/assets/images/hero/hero5mobile.webp";

// function Index() {
//   return (
//     <div className="h-screen min-h-[600px] max-h-[750px] relative flex items-center justify-center md:justify-start mainBG ">
//       <div className="flex items-center py-10 mb-8 ">
//         <div className="flex flex-col justify-start max-w-[600px] md:ml-24 md:mt-36 ">
//           {/* content  */}
//           <div className="flex flex-col w-full p-4">
//             {/* title */}
//             <h1 className="text-4xl lg:text-6xl font-semibold mb-6 leading-[35px] lg:mb-6 ">
//               Nous Réparons vos
//               <span className="text-MainOrange"> Smartphones </span> et
//               <span className="text-MainOrange"> Tablettes</span>
//             </h1>
//             {/* dots */}
//             <ul className="flex flex-col md:flex-row list-icons gap-4  ">
//               <li className="flex items-center ">Déplacement offert</li>
//               <li className="flex items-center ">Garantie 3 mois</li>
//               <li className="flex items-center ">Pièces de qualité</li>
//             </ul>

//             {/* buttons */}
//             <Link
//               href="/simulateur"
//               className="mt-11 bg-gradient-to-r from-MainOrange to-MainOrangeLight w-full max-w-[300px] text-lg text-center text-white py-2 rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg"
//             >
//               Réparer mon appareil
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Index() {
  const [isMobileState, setIsMobileState] = useState(null);
  useEffect(() => {
    setIsMobileState(window.innerWidth <= 640);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobileState(window.innerWidth <= 640);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliders = [
    {
      desktopSlider: picHero1,
      mobileSlider: picHero1Mobile,
      navigateTo: "/simulateur",
    },
    {
      desktopSlider: picHero2,
      mobileSlider: picHero2Mobile,
      navigateTo: "/simulateur",
    },
    {
      desktopSlider: picHero3,
      mobileSlider: picHero3Mobile,
      navigateTo: "/simulateur",
    },
    {
      desktopSlider: picHero4,
      mobileSlider: picHero4Mobile,
      navigateTo: "tel:0780801455",
    },
    {
      desktopSlider: picHero5,
      mobileSlider: picHero5Mobile,
      navigateTo: "/simulateur",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative sm:max-w-[1600px] flex items-center justify-center md:justify-start mt-[150px] overflow-auto">
        <div className="h-fit w-full px-5">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            className="w-full"
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper )}
          >
            {sliders?.map((item, key) => (
              <SwiperSlide key={key}>
                <Link href={item?.navigateTo}>
                  <div className="h-fit w-full">
                    <Image
                      src={
                        isMobileState ? item?.mobileSlider : item?.desktopSlider
                      }
                      className="w-full h-full"
                      alt="hero pic"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Index;
