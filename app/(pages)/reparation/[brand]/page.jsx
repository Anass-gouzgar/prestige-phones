import "@/styles/Hero.modules.css";
import Link from "next/link";
import Header from "../../../../modules/Home_page/Header";
import Footer from "../../../../modules/Home_page/Footer";
import Image from "next/image";
import dynamic from "next/dynamic";
import Modele from "../_components/Modele";
import ModesRéparations from "../_components/modesReparations";
import SimpleEtRapide from "../_components/SimpleEtRapide";

// wave
import wave from "@/public/assets/icons/icons/wavesOpacity2.svg";

const RepairServiceSection = dynamic(
    () => import("@/modules/Home_page/RepairServiceSection/index.jsx"),
    {
      loading: () => <p></p>,
    }
  ),
  Recommandations = dynamic(
    () => import("@/modules/Home_page/Recomandations/index.jsx"),
    {
      loading: () => <p></p>,
    }
  );

// Sanity
import { FetchData } from "@/Sanity/client";
import urlFor from "@/Sanity/client";

const fetchDevice = async (slug) => {
  const query = `*[_type=='device' && slug.current == "${slug}"]{
    title,
    models,
    image
  }[0]`;
  try {
    const device = await FetchData(query);
    return device;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};

async function Index({ params }) {
  const device = await fetchDevice(params.brand);

  return (
    <div className="mx-auto mt-16 md:mt-0">
      <Header />
      {/* hero section */}
      <div className="h-screen min-h-[700px] max-h-[750px] flex items-center justify-center w-full mx-auto relative">
        <div className="flex items-center justify-center md:mt-16">
          <div className="flex">
            {/* content  */}
            <div className="flex flex-col p-4 max-w-[800px] justify-center">
              {/* title */}
              <h1
                style={{ lineHeight: "1.3" }}
                className="text-4xl lg:text-6xl font-semibold mb-6 lg:mb-6 md:w-[60%]"
              >
                Presige Phone répare votre
                <span className="capitalize text-MainOrangeLight ">
                  {" " + device?.title}
                </span>
              </h1>
              {/* dots */}
              <ul className="flex flex-col md:flex-row list-icons gap-4  ">
                <li className="flex items-center ">Déplacement offert</li>
                <li className="flex items-center ">Garantie 3 mois</li>
                <li className="flex items-center ">Pièces de qualité</li>
              </ul>

              {/* buttons */}
              <Link
                href="/simulateur"
                className="mt-11 bg-gradient-to-r from-MainOrange to-MainOrangeLight w-full max-w-[300px] text-lg text-center text-white py-2 rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg"
              >
                Réparer mon
                <span className="capitalize">{" " + device?.title}</span>
              </Link>
            </div>
            {/* img */}
            <div className="h-[570px] md:flex hidden max-w-[400px] ">
              {device?.image && (
                <Image
                  src={urlFor(device?.image)?.url()}
                  width={1500}
                  height={1500}
                  alt={device?.title}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
        <Image
          src={wave}
          className="sm:block hidden absolute w-full h-[250px] bottom-0 left-0 right-0 scale-[-1] -z-10 opacity-80"
          alt="wave"
        />
      </div>
      <RepairServiceSection />
      <Modele brand={device?.title} models={device?.models} />
      <ModesRéparations brand={device?.title} />
      <Recommandations />
      <SimpleEtRapide brand={device?.title} />
      <Footer />
    </div>
  );
}

export default Index;
