import Link from "next/link";
import { FaQuestion } from "react-icons/fa";

const Modele = ({ brand, models }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="sm:max-w-[1600px] md:px-36 mb-8">
        {/* headers */}
        <div className="px-16 flex flex-col">
          <h4 className="text-MainOrange text-3xl font-bold mb-4">Le Modele</h4>
          <h1 className="md:text-5xl font-bold mb-10">
            Selectionnez votre
            <span className="capitalize">{" " + brand}</span> que vous voulez
            que l'on repare :
          </h1>
        </div>
        <div className={`grid grid-cols-1 gap-4 px-24 mt-10 md:grid-cols-4 `}>
          {models?.map((model, key) => (
            <div key={key}>
              <Link
                href={`/simulateur?phone=${brand}&model=${model?.title}`}
                className="block border py-2 cursor-pointer rounded-xl hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                <div className="flex justify-center items-baseline py-1 ">
                  <p className="text-xs ">{model?.title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* question section */}
        <div className="mx-auto md:w-[55%] p-3">
          <div className="flex md:flex-row md:justify-between md:items-center flex-col items-center mt-10 md:p-4 rounded-xl py-3 gap-2 bg-slate-100">
            {/* 1 */}
            <div className="flex items-center md:gap-4">
              <FaQuestion className="px-6 size-20 text-2xl text-MainOrange " />
              <p className="text-xl md:w-[60%] w-auto">
                Vous ne trouvez pas votre appareil dans la liste ?
              </p>
            </div>
            <Link
              href="/simulateur"
              className="bg-gradient-to-r from-MainOrange to-MainOrangeLight w-full max-w-[300px] text-lg text-center text-white py-2 rounded-[10px] transition ease-in-out delay-150 hover:-translate-y-1 hover:shadow-lg"
            >
              identifier mon appareil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modele;
