import Image from "next/image";

// icons
import appleIcon from "@/public/assets/images/apple-icon.svg";

export default function RemoteRepair() {
  return (
    <div className="w-full max-w-[700px] bg-gray-100 rounded-2xl flex sm:gap-10 gap-5 sm:p-7 p-4">
      <div className="min-w-[50px]">
        <Image src={appleIcon} className="w-full" alt="icon" />
      </div>

      <div className="flex flex-col sm:gap-7 gap-4">
        <h2 className="text-Gray font-bold text-xl">Réparation à distance</h2>
        <p className="font-light text-sm">
          Si vous ne vous situez pas dans notre périmètre d’intervention,
          profitez de notre service d’envoi postal. Dès réception de votre colis
          à notre atelier, nous validons avec vous votre demande et nous nous
          occupons de la réparation de votre téléphone ou tablette.
        </p>
      </div>
    </div>
  );
}
