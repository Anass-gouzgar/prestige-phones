import Image from "next/image";
import Link from "next/link";

// components
import Header from "./_components/Header";

// icons
import appleIcon from "@/public/assets/images/apple-icon.svg";

export default function index() {
  const steps = [
    {
      title: "Imprimez",
      description: "Imprimez et remplissez ",
      link: {
        label: "cette fiche d’information",
        navigateTo: "/",
      },
    },
    {
      title: "Envoyez",
      description:
        "Envoyez votre appareil bien emballé avec la fiche d’information complétée",
    },
    {
      title: "Nous vous contactons",
      description:
        "Nous vous contactons une fois l’appareil reçu pour vous confirmer notre prise en charge et le prix de la prestation",
    },
    {
      title: "Payez",
      description: "Payez via notre lien de paiement que nous vous envoyons",
    },
    {
      title: "Nous réparons",
      description: "Notre technicien effectue les réparations en 24/48h",
    },
    {
      title: "Réceptionnez",
      description:
        "Recevez votre appareil réparé à l’endroit que vous souhaitez",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-10 py-16 sm:px-5 px-2">
        <Header />

        <div className="w-full max-w-[1000px] grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {steps?.map((item, key) => (
            <div key={key} className="w-full flex justify-center items-center">
              <div className="size-[280px] bg-gray-100 rounded-3xl flex flex-col justify-center items-center gap-5 p-5">
                <div className="h-[40%] flex justify-center items-end">
                  <Image src={appleIcon} className="w-14" alt={item?.title} />
                </div>
                <div className="h-[60%] flex flex-col justify-start items-center gap-2">
                  <h4 className="font-bold text-lg">
                    {key + 1}. {item?.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-light text-center">
                    {item?.description}
                    {item?.link && (
                      <Link
                        href="/assets/pdf/prestige_phone.pdf"
                        target="_blank"
                        className="font-medium"
                      >
                        {item?.link?.label}
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
