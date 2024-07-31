import Image from "next/image";

function Card({ title, description, icon }) {
  return (
    <div className="md:w-[370px] w-[300px] h-auto md:h-[360px] xl:h-[300px] bg-white text-black px-6 py-8 flex flex-col justify-start gap-4 items-start rounded-xl hover:scale-[1.02] hover:shadow-xl  duration-200">
      <div className="w-16">
        <Image className="object-contain w-full h-full" src={icon} alt="icon" />
      </div>

      <h1 className="font-semibold text-xl lg:text-2xl text-[#3E3E3E]">
        {title}
      </h1>

      <p className="text-sm">{description}</p>
    </div>
  );
}

export default Card;
