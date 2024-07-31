import Image from "next/image";

// components
import Header from "./_components/Header";

// icons
import appleIcon from "@/public/assets/images/apple-icon.svg";

export default function index() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-10 sm:px-5 px-2">
        <Header />
        <p className="text-sm text-Gray max-w-[1000px]">
          Pour faire réparer votre téléphone ou votre tablette sans vous
          déplacer, vous pouvez recourir à notre service de réparation à
          distance. Pour cela, il vous suffit d’imprimer le formulaire. Après
          avoir fourni les informations nécessaires dans le formulaire,
          joignez-le à votre téléphone bien emballé et envoyez-le à l’adresse de
          notre atelier :
        </p>

        <div className="w-fit flex items-center sm:gap-10 gap-5 bg-gray-100 text-Gray rounded-2xl sm:p-10 p-5">
          <Image src={appleIcon} className="w-12" alt="icon" />

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-2xl">Prestige Phone</h3>
            <p className="text-sm">
              21 Av. Anatole France, 93500 Pantin, France
            </p>
          </div>
        </div>

        <p className="text-sm text-Gray max-w-[1000px]">
          Une fois votre téléphone reçu, nous vous contactons pour vous en
          confirmer notre prise en charge et vous fournir le devis. Lorsque vous
          avez validé la réparation, nous vous envoyons un lien pour réaliser le
          paiement sécurisé de l’intervention. L’un de nos techniciens effectue
          la réparation dans les 24 à 48 heures suivant la validation et nous
          vous renvoyons votre appareil, comme neuf, à l’adresse de votre choix.
        </p>
      </div>
    </div>
  );
}
