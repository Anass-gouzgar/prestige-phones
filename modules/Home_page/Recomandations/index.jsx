"use client";
import { useState } from "react";
import Image from "next/image";
import profile from "/public/assets/images/profile.jpg";
import google from "/public/assets/images/Google.png";
import facebook from "/public/assets/images/Facebook.png";
import star from "/public/assets/images/star-active.svg";
import Card from "../Recomandations/_components/Card.jsx";

// icons
import chevronIcon from "@/public/assets/icons/icons/chevron-right.svg";

// images
import apple from "@/public/assets/images/apple.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// pictures
import eleonore_gueyffier from "@/public/assets/images/reviews/eleonore_gueyffier.png";
import juliette_leroux from "@/public/assets/images/reviews/juliette_leroux.png";
import raphael_zerrad from "@/public/assets/images/reviews/raphael_zerrad.png";
import bonnat_mallaury from "@/public/assets/images/reviews/bonnat_mallaury.png";

const cardsData = [
  {
    title: "Eléonore Gueyffier",
    description:
      "« Absolument top! Ultra efficace, mon iPhone 11 est comme neuf ! Le service est incroyable, ils viennent en bas de chez vous et vous le rapporte! Je recommande vivement ! Merci encore :) »",
    image: eleonore_gueyffier,
  },
  {
    title: "Juliette leroux",
    description:
      "« Super réactif et efficace. Se déplace directement au domicile et la réparation est faite en moins de 10 mins. Qualité de la vitre au top Je recommande !! Merci gabriel super pro et agréable »",
    image: juliette_leroux,
  },
  {
    title: "Raphael Zerrad",
    description:
      "« Réparation écran iPhone sur Paris ouvert de nuit il viennent de me réparer mon iPhone en 30 minutes service rapide et efficace »",
    image: raphael_zerrad,
  },
  {
    title: "Bonnat Mallaury",
    description:
      "« Très sérieux. Je recommande vivement pour toute réparation (pour ma part sur un iPhone 11, remplacement d’écran) »",
    image: bonnat_mallaury,
  },
];

const Index = () => {
  const [swiper, setSwiper] = useState(null);
  return (
    <div className="w-full bg-red-700">
      <div className="bg-MainOrange flex flex-col items-center mx-auto relative sm:px-5 px-2">
        <Image
          src={apple}
          className="max-h-full absolute bottom-0 right-0 z-0 pointer-events-none"
          alt="apple bg"
        />
        <header className="text-center pt-5 z-10">
          <div className="text-3xl font-semibold pt-1 text-white px-6 w-[80%] mx-auto mb-3 ">
            Vous avez encore des doutes, n’hésitez plus !
          </div>
          <h3 className="text-sm text-white pt-1 px-6 w-[80%] mx-auto">
            Ne nous croyez pas sur parole, lisez plutôt les avis de nos clients
          </h3>
        </header>
        {/* slider */}
        <div className="w-full max-w-[1400px] z-10">
          <div className="w-full flex items-center gap-2">
            <button
              onClick={() => swiper.slidePrev()}
              type="button"
              className="mt-20 min-w-[50px] min-h-[50px] size-[50px] bg-white flex justify-center items-center rounded-full hover:opacity-90 duration-300"
            >
              <Image
                src={chevronIcon}
                className={`w-3 scale-x-[-1]`}
                alt="chevron"
              />
            </button>
            <Swiper
              spaceBetween={20}
              loop={true}
              className="h-[550px] w-full rounded-lg "
              onSwiper={(swiper) => setSwiper(swiper)}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {cardsData.map((card, index) => (
                <SwiperSlide key={index} className="mt-16 ">
                  <Card
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={() => swiper.slideNext()}
              type="button"
              className="mt-20 min-w-[50px] min-h-[50px] size-[50px] bg-white flex justify-center items-center rounded-full hover:opacity-90 duration-300"
            >
              <Image src={chevronIcon} className={`w-3`} alt="chevron" />
            </button>
          </div>
        </div>
        {/* review container */}
        <div className="w-auto text-center flex gap-14 p-6 z-10">
          {/* google review */}
          <div className="bg-white h-auto w-auto space-y-1 md:p-7 p-9 rounded-xl">
            <div>
              <Image src={google} alt="reviews" className="w-32 mx-auto" />
            </div>
            <div className="text-xs ">(4.9/5 sur 199 avis)</div>
            <div className="flex justify-center sm:gap-3 ">
              <Image src={star} alt="star" className="h-6 w-6 " />
              <Image src={star} alt="star" className="h-6 w-6 " />
              <Image src={star} alt="star" className="h-6 w-6 " />
              <Image src={star} alt="star" className="h-6 w-6 " />
              <Image src={star} alt="star" className="h-6 w-6 " />
            </div>
          </div>
          {/* facebook review */}
          <div className="bg-white h-auto w-auto space-y-1 md:p-7 p-8 rounded-xl">
            <div className="mb-3 mt-1">
              <Image src={facebook} alt="reviews" className=" mx-auto" />
            </div>
            <div className="text-xs ">(5/5 sur 80 avis)</div>
            <div className="flex justify-center sm:gap-3 ">
              <Image src={star} alt="star" className="h-6 w-6 " />
              <Image src={star} alt="star" className="h-6 w-6 " />
              <Image src={star} alt="star" className="h-6 w-6 " />
              <Image src={star} alt="star" className="h-6 w-6 " />
              <Image src={star} alt="star" className="h-6 w-6 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
