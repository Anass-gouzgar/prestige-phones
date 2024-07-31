import Image from "next/image";

const Card = ({ title, description, image }) => {
  return (
    <div className=" w-full max-w-[400px] mx-auto rounded-xl h-[400px] bg-white p-6 text-center shadow-lg mt-16 ">
      <div className="mx-auto flex h-24 w-24 -mt-14 -translate-y-3 transform border-4 border-white items-center justify-center rounded-full shadow-lg ">
        <Image
          src={image}
          alt="Profile"
          className=" rounded-full w-full h-full"
        />
      </div>

      <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">{title}</h1>
      <p className="sm:text-base text-sm line-clamp-[11]">{description}</p>
    </div>
  );
};

export default Card;
