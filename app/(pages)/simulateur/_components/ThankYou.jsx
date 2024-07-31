
import check from "@/public/assets/images/check3.png";
import Image from "next/image";
function ThankYou() {
  return (
    <div className="flex flex-col justify-center  items-center max-w-[500px]  h-[600px]  mx-auto">
      <Image src={check} alt="check" className="h-44 w-44 object-contain" />
      <h1 className="text-5xl font-[900] ">Merci !</h1>
      <p className="mt-4 text-center">
        ’équipe de Prestige Phone a bien reçu votre demande. Vous serez bientôt contacté·e
        pour convenir d’un rendez-vous.
      </p>
      <p className="text-center mt-4">
        À bientôt, et longue vie à votre téléphone !
      </p>
    </div>
  );
}

export default ThankYou;
