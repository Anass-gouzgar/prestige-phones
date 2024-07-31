import "@/styles/Hero.modules.css";
import Link from "next/link";
import Image from "next/image";

// icons
import wave from "@/public/assets/icons/icons/wavesOpacity.svg";

function Index({ title }) {
  return (
    <div className="h-screen min-h-[600px] max-h-[750px] relative flex items-center justify-center mainBG">
      <div className="w-full max-w-[1600px] flex items-center z-10">
        <div className="w-full flex flex-col justify-start max-w-[1200px] lg:px-24 px-5">
          {/* content  */}
          <div className="flex flex-col w-full p-4 gap-7">
            {/* title */}
            <h1 className="font-extrabold text-Gray [font-size:_clamp(2em,5vw,3.75rem)]">
              {title}
            </h1>
            {/* dots */}
            <ul className="flex flex-col md:flex-row list-icons gap-4  ">
              <li className="flex items-center">Déplacement offert</li>
              <li className="flex items-center">Garantie 3 mois</li>
              <li className="flex items-center">Pièces de qualité</li>
            </ul>

            {/* buttons */}
            <Link
              href="/simulateur"
              className="bg-gradient-to-r from-MainOrange to-MainOrangeLight w-full max-w-[300px] text-lg text-center text-white py-2 rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg"
            >
              Réparer mon appareil
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 right-0 z-0">
        <Image
          src={wave}
          className="w-full pointer-events-none scale-y-[-1]"
          alt="wave"
        />
      </div>
    </div>
  );
}

export default Index;
