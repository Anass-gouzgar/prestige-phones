import Image from "next/image";

// components
import Header from "./_components/Header";

// icons
import appleIcon from "@/public/assets/images/apple-icon.svg";

export default function index() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-10 pb-16 sm:px-5 px-2">
        <Header />

        <p className="text-sm text-Gray max-w-[900px]">
          Prestige Phone est spécialisé dans la réparation de téléphone à
          domicile depuis 2011, mais face aux demandes croissantes de clients
          qui ne se situent pas dans notre zone d’intervention, nous avons mis
          en place un système de réparation par envoi postal qui vous permet de
          bénéficier de nos services où que vous soyez. Chez Prestige Phone,
          nous savons l’importance de votre téléphone dans votre vie privée et
          professionnelle, c’est pourquoi nous vous garantissons les pièces de
          la meilleure qualité disponibles sur le marché. Une fois la réparation
          réalisée, nous procédons à une série de tests afin de nous assurer du
          bon fonctionnement de votre appareil avant de vous le renvoyer.
          Lorsque votre téléphone arrive dans notre atelier, nous le réparons,
          le chouchoutons et vous le renvoyons dans les 48 heures suivant votre
          validation. Votre téléphone ne sera pas déçu de son séjour à Bordeaux,
          et vous non plus !
        </p>

        <div className="flex flex-col gap-5">
          <h4 className="font-bold text-xl text-Gray">
            Faites réparer votre smartphone en toute facilité !
          </h4>

          <div className="w-full flex flex-wrap gap-7">
            {[
              "Réparation sous 48h",
              "Garantie 3 mois",
              "Retour sous 48h",
              "Frais de port retour offert",
            ]?.map((item, key) => (
              <div
                key={key}
                className="w-full max-w-[280px] h-[230px] bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-5 p-5"
              >
                <div className="h-[50%] flex justify-center items-end">
                  <Image src={appleIcon} className="w-14" alt={item} />
                </div>
                <div className="h-[50%]">
                  <span className="font-bold text-lg">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
