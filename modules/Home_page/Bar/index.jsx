import icon from "@/public/assets/images/apple-icon.svg";
import Card from "./_components/Card";

function index() {
  const data = [
    {
      title: "Déplacement offert ",
      description:
        "Ne vous dérangez plus. L’un de nos techniciens qualifiés se déplace gratuitement sur le lieu et à l’heure de votre choix.",
      icon: icon,
    },
    {
      title: "Réactivité",
      description:
        "Si la panne nous le permet, nous réparons votre smartphone ou tablette sur place, sous vos yeux. Sinon, nous intervenons dans nos ateliers, dans un délai de 24 à 48h.",
      icon: icon,
    },
    {
      title: "Des pièces de qualité",
      description:
        "Nous sélectionnons nos fournisseurs avec soin : les pièces que nous utilisons pour réparer vos appareils sont les meilleures du marché !",
      icon: icon,
    },
  ];
  return (
    <div
      className="bg-MainOrange w-full 
       md:flex md:flex-row  grid items-center justify-center gap-10  md:mt-10 p-8"
    >
      {data.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default index;
