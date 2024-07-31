import Link from "next/link";

// Sanity
import { FetchData } from "@/Sanity/client";

const fetchStreets = async (city) => {
  const query = `*[_type=='street' && city->slug.current == "${city}"]`;
  try {
    const streets = await FetchData(query);
    return streets;
  } catch (error) {
    console.error("Error fetching streets:", error);
    return null;
  }
};

export default async function Cities({ city }) {
  const streets = await fetchStreets(city);
  return (
    <ul className="w-full grid sm:grid-cols-3 grid-cols-2 gap-5 font-light text-sm">
      {streets?.map((item, key) => (
        <li
          key={key}
          className="min-w-fit hover:text-MainOrangeLight duration-300 flex items-center gap-2"
        >
          <div className="size-[18px] bg-MainOrangeLight/50 rounded-full relative">
            <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] size-[12px] bg-MainOrange rounded-full" />
          </div>
          <Link href={`ville/${city}/${item?.slug?.current}`}>
            {item?.street}
          </Link>
        </li>
      ))}
    </ul>
  );
}
