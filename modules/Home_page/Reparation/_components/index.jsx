import Image from "next/image";
import Link from "next/link";

const Card = ({ img, title, link }) => {
  return (
    <div>
      <div className="bg-MainOrangeLight flex flex-wrap flex-col justify-center items-center max-w-72 h-[470px] rounded-lg space-y-3 ">
        <div className="flex justify-center  h-[370px] w-[98%] ">
          <Image src={img} className="w-full object-cover " />
        </div>
        <h1 className="text-white font-bold">{title}</h1>
        <button>
          <Link
            href={link}
            className="text-MainOrange bg-slate-50 text-sm font-medium px-1 py-1 rounded"
          >
            Réparer mon Telephone
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
