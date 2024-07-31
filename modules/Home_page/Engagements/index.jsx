import Card from "./_components/Card";

// icons
import icon1 from "@/public/assets/icons/icons/Engagements/icon1.svg";
import icon2 from "@/public/assets/icons/icons/Engagements/icon2.svg";
import icon3 from "@/public/assets/icons/icons/Engagements/icon3.svg";
import icon4 from "@/public/assets/icons/icons/Engagements/icon4.svg";
import icon5 from "@/public/assets/icons/icons/Engagements/icon5.svg";
import icon6 from "@/public/assets/icons/icons/Engagements/icon6.svg";
import icon7 from "@/public/assets/icons/icons/Engagements/icon7.svg";
import icon8 from "@/public/assets/icons/icons/Engagements/icon8.svg";

function index() {
  const data = [
    {
      title: "Une garantie de 3 mois",
      description:
        "90 jours de garantie, dans le cas où un problème surviendrait après notre intervention. Rassurez-vous, ça n’arrivera pas.",
      icon: icon1,
    },
    {
      title: "Un déplacement offert",
      description:
        "Les réparateurs agréés prestige phone viennent à votre rencontre, sans que le prix de la réparation augmente.",
      icon: icon2,
    },
    {
      title: "Les meilleures pièces du marché",
      description:
        "Nous utilisons uniquement des pièces officielles ou identiques aux originales. En plus, nous testons et contrôlons chaque pièces de manière ultra-rigoureuse, pour bénéficier de la meilleure des qualités.",
      icon: icon3,
    },
    {
      title: "Des prix compétitifs et transparents",
      description:
        "Avec prestige phone, vous ne vous faites pas avoir. Chaque réparation est précédée d’un devis, à un rapport qualité/prix imbattable. Pour connaitre nos tarifs : c’est ici.",
      icon: icon4,
    },
    {
      title: "Une équipe à l’écoute",
      description:
        "Par téléphone ou par mail, nous sommes là pour vous conseiller. Quelle que soit votre demande, nous nous adaptons à vos exigences.",
      icon: icon5,
    },
    {
      title: "Une entreprise éco-responsable",
      description:
        "Nous luttons contre l’obsolescence programmée en offrant une seconde vie à vos tablettes et smartphones. Chaque pièce défaillante est recyclée.",
      icon: icon6,
    },
    {
      title: "Une réactivité à toute épreuve",
      description:
        "La force de Prestige Phone est de pouvoir répondre à vos demandes dans l’urgence et la bonne humeur. Nos techniciens se tiennent prêts à intervenir.",
      icon: icon7,
    },
    {
      title: "Intervention en 30” chrono",
      description:
        "Parfois moins, mais rarement plus. Grâce à une parfaite maîtrise des gestes et des spécificités techniques de tous les modèles, nous savons faire vite et bien.",
      icon: icon8,
    },
  ];
  return (
    <div className="max-w-[1500px] mx-auto ">
      <div className="flex items-center justify-center px-24 pb-24">
        <div>
          <h1 className="md:text-5xl text-2xl md:w-full mb-4 w-56 text-center font-[600] text-bold">
            Les engagements de Prestige Phone
          </h1>
          <h2 className="text-xl text-MainOrange text-bold text-center">
            Efficace et responsable
          </h2>
        </div>
      </div>

      {/* cards */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-8">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            icon={item?.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default index;
