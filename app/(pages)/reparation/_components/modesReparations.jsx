import React from "react";
import Image from "next/image";
import moto from "../../../../public/assets/images/moto.webp";
import atelier from "../../../../public/assets/images/atelier.webp";
import post from "../../../../public/assets/images/post.webp";
import Link from "next/link";

const ModesRéparations = ({ brand }) => {
  
  const data = [
    {
      id: 1,
      icon: moto,
      title: "Où vous voulez",
      description: `Plutôt que de vous déplacer dans une boutique de réparation traditionnelle et d'attendre votre tour, faites appel à nos réparateurs itinérants. Ils vous rejoignent où et quand vous voulez pour remettre votre ${brand} à neuf dans les plus brefs délais.`,
    },
    {
      id: 2,
      icon: atelier,
      title: "Où vous voulez",
      description: `Si vous habitez à Bordeaux ou que vous passez par là, vous pouvez nous apporter votre ${brand} cassé directement à notre atelier. Il se situe en plein cœur de Bordeaux, au 1 rue des Boucheries. Un réparateur se trouve toujours sur place pour vous accueillir et répondre à vos besoins.`,
    },
    {
      id: 3,
      icon: post,
      title: "Par voie postale",
      description: `Si vous souhaitez faire appel à nos services mais que vous ne vous trouvez pas dans notre secteur d'intervention, vous pouvez nous envoyer votre ${brand} cassé à l'adresse de notre atelier. Une fois réparé, nous vous retournons votre ${brand} comme neuf, où vous voulez.`,
    },
  ];
  return (
    <div className="flex flex-col items-center mb-12">
      <div
        className="w-full 
       md:flex md:flex-row grid items-center justify-center gap-10 p-8"
      >
        {/* cards */}

        {data.map((item, index) => (
          <div
            key={index}
            className="md:w-[370px] w-[300px] h-auto md:h-[500px] lg:h-[380px] xl:h-[360px] bg-white px-6 py-8 flex flex-col justify-start gap-4 items-start rounded-xl md:flex border shadow-md "
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16">
                <Image
                  className="object-contain w-full h-full"
                  src={item.icon}
                  alt="icon"
                  width={50}
                  height={50}
                />
              </div>
              <h1 className="font-bold text-xl lg:text-2xl text-[#3E3E3E]">
                {item.title}
              </h1>
              <p className="text-sm px-4 text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* button */}
      <Link
        href={"/simulateur"}
        className="mb-8 bg-gradient-to-r from-MainOrange to-MainOrangeLight w-full max-w-[300px] text-lg text-center text-white py-2 rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg"
      >
        Réparer son {brand}
      </Link>
      <div className="space-y-4 px-6  ">
        <p className="text-center leading-6">
          <span>
            Vous avez cassé votre écran{" " + brand}, la batterie de votre{" "}
            {" " + brand} ne tient plus la charge…
          </span>
        </p>
        <p className="text-center leading-6">
          <span className="">
            Nous avons la solution. Nous venons réparer votre smartphone dans
            les communes suivantes : réparation
            {" " + brand} à Bordeaux et réparation
            {" " + brand} à Paris.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ModesRéparations;
