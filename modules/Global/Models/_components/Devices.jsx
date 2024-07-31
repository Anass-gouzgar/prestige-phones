import Image from "next/image";
import Link from "next/link";

// Sanity Image
import urlFor from "@/Sanity/client";

export default function Devices({ data }) {
  return (
    <div className="w-full max-w-[1000px] grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-10">
      {data?.map((item, key) => (
        <div key={key} className="flex flex-col gap-5">
          {item?.image && (
            <div className="ps-5">
              <Image
                src={urlFor(item?.image)?.url()}
                className="w-[50px] h-[100px] object-contain"
                width={300}
                height={300}
                alt={item?.title}
              />
            </div>
          )}
          <h2 className="w-fit text-gray text-lg font-bold capitalize relative before:content-[''] before:absolute before:w-[60%] before:h-1 before:rounded-full before:bg-MainOrangeLight before:-bottom-0 ps-5">
            {item?.title}
          </h2>
          <ul className="text-sm font-light flex flex-col gap-5">
            {item?.models?.map((subItem, subKey) => (
              <li key={subKey}>
                <Link
                  href={`/simulateur?phone=${item?.title}&model=${subItem?.title}`}
                  className="py-2 px-5 hover:bg-MainOrangeLight hover:text-white rounded-lg duration-300"
                >
                  {subItem?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
