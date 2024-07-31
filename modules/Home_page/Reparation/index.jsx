import Image from "next/image";
import Link from "next/link";

import { FetchData } from "@/Sanity/client";
import urlFor from "@/Sanity/client";

const fetchDevices = async () => {
  const query = `*[_type=='device'] | order(_createdAt asc) [0...6]`;
  try {
    const devices = await FetchData(query);
    return devices;
  } catch (error) {
    console.error("Error fetching devices:", error);
    return [];
  }
};

const Reparatin = async () => {
  const data = await fetchDevices();
  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-auto sm:max-w-[1600px] w-[86%] justify-center mx-auto">
        <h1 className="text-4xl text-MainOrange font-bold text-center mb-6 mt-10">
          Nous réparons votre
        </h1>
        <div className="w-full flex flex-wrap justify-center gap-x-16 gap-y-10 items-center mb-10">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-64 h-[470px] rounded-xl space-y-3"
            >
              <Link href={`/simulateur?phone=${item.title}`}>
                <div className="group h-[380px] flex justify-center overflow-hidden relative perspective-400">
                  {item?.image && (
                    <Image
                      src={urlFor(item?.image).url()}
                      width={500}
                      height={600}
                      className="min-h-full h-full object-contain bg-white object-center z-10 group-hover:-z-10 transform group-hover:rotate-y-[180deg] duration-300"
                      alt={item.title}
                    />
                  )}
                  {item?.frontImage && (
                    <Image
                      src={urlFor(item?.frontImage).url()}
                      width={500}
                      height={600}
                      className="absolute h-full object-contain bg-white object-center transform -rotate-y-[180deg] group-hover:rotate-y-[0] duration-300"
                      alt={item.title}
                    />
                  )}
                </div>
              </Link>

              <h1 className="text-MainOrange font-medium capitalize">
                {item.title}
              </h1>
              <Link
                href={`/simulateur?phone=${item.title}`}
                className="text-white bg-MainOrange text-sm font-medium px-3 py-2 rounded"
              >
                Réparer mon Telephone
              </Link>
            </div>
          ))}
          <div className="flex w-64 h-64 flex-wrap justify-center items-center mb-10">
            <Link href="/simulateur" className="font-bold text-center">
              Autres
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reparatin;
