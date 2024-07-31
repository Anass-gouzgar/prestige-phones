import Image from "next/image";

export default function Card({ title, description, icon }) {
  return (
    <div className="w-[300px] h-[300px] bg-gradient-to-t from-MainOrange to-MainOrangeLight text-white rounded-3xl shadow-md p-5 relative hover:scale-[1.03] hover:shadow-xl duration-200">
      <div className="relative flex flex-col items-start gap-3 z-10">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="font-light">{description}</p>
      </div>

      <Image
        src={icon}
        className="absolute bottom-5 left-5 w-[200px] h-[200px] object-contain z-0 pointer-events-none"
        alt={title}
      />
    </div>
  );
}
