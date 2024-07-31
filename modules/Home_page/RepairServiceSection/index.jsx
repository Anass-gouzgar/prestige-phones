import Card from "./_components/Card";
import client from "@/public/assets/images/client.svg";
import test from "@/public/assets/images/profile.jpg";
import etape1 from "@/public/assets/images/etape-1.jpg";
import etape2 from "@/public/assets/images/etape-2.jpg";
import etape3 from "@/public/assets/images/etape-3.jpg";
import Image from "next/image";

function Index() {
  const data = [
    {
      step: "Étape 1",
      title: "Mauvaise nouvelle",
      description:
        "Votre téléphone ou votre tablette est cassé. Heureusement, vous êtes au bon endroit ! Nous vous proposons une solution géniale pour la reparation telephone. Nous pouvons résoudre pratiquement tous les problèmes sur les iPhone, iPad, Samsung Galaxy ou Huawei. Cliquez sur réparer mon appareil lorsque vous êtes prêt ! ",
      img: etape1,
    },
    {
      step: "Étape 2",

      title: "La prise de rendez-vous",
      description:
        "Dites-nous où vous êtes et quand vous voulez procéder à la reparation de votre smartphone ou votre tablette et nous planifierons ensemble une intervention avec l’un de nos réparateurs agréés prestige phone à l’heure et au lieu qui vous conviennent le mieux. À la maison ? Au travail ? Dans un café ? Peu importe, nous réparons votre smartphone ou votre tablette, où que vous soyez.",
      img: etape2,
    },
    {
      step: "Étape 3",

      title: "Nous réparons votre appareil en 30 minutes",
      description:
        "Votre téléphone ou votre tablette est cassé. Heureusement, vous êtes au bon endroit ! Nous vous proposons une solution géniale pour la reparation telephone. Nous pouvons résoudre pratiquement tous les problèmes sur les iPhone, iPad, Samsung Galaxy ou Huawei. Cliquez sur réparer mon appareil lorsque vous êtes prêt ! ",

      img: etape3,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div className="sm:max-w-[1600px]">
        {/* first section */}
        <div className="flex-col flex md:flex-row items-center justify-center mx-auto md:gap-10 md:px-44 w-full">
          <Image
            src={client}
            className="transform -translate-y-20 "
            alt="person pic"
          />
          <div className="text-center mx-auto md:-ml-10 ">
            <h1 className=" text-3xl md:text-5xl font-[900] mb-4">
              Comment Cela Fonctionne ?
            </h1>

            <h2 className="text-2xl w-[330px] text-slate-600 mx-auto">
              Les étapes de la réparation de votre téléphone
            </h2>
          </div>
        </div>
        {/* etapes section  */}
        <div className="mt-28 flex flex-col flex-wrap items-center justify-center w-full h-auto gap-4  gap-x-14">
          {data.map((item, index) => (
            <Card
              key={index}
              etape={item.step}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
