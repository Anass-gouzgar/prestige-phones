import Image from "next/image";

function Card({ title, etape, description, img }) {
  return (
    <div className="flex flex-col items-center w-[70%] border border-MainOrange mb-24 md:h-[280px] h-[380px] rounded-2xl text-center ">
        <Image
          src={img}
          className="-mb-16 w-32 h-32 flex justify-center -translate-y-20 rounded-full border border-MainOrange"
          alt="icon"
        />
      <h2 className="font-bold text-xl mb-2">{etape}</h2>
      <h2 className="font-bold text-2xl md:text-4xl text-MainOrange mb-2">{title}</h2>
      <p className="text-[12px] pb-6 text-gray-700 font-semibold lg:text-[13px] px-3">
        {description}
      </p>
    </div>
  );
}

export default Card;
