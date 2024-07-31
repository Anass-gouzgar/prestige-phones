// Sanity
import { FetchData } from "@/Sanity/client";

// components
import City from "./City";

const fetchStreets = async () => {
  const query = `*[_type=='street']| order(_createdAt asc){
      slug,
      street,
      city->{
        city,
        slug
      }
    }`;
  try {
    const streetsData = await FetchData(query);
    const organizedStreets = [];

    streetsData.forEach(({ street, slug, city }) => {
      const streetSlug = slug.current;
      const cityName = city.city;
      const citySlug = city.slug.current;

      // Check if the city already exists in the organizedStreets array
      const existingCityIndex = organizedStreets.findIndex(
        (item) => item.city === cityName
      );

      // If city doesn't exist, add it to the organizedStreets array
      if (existingCityIndex === -1) {
        organizedStreets.push({
          city: cityName,
          slug: citySlug,
          streets: [{ street, slug: streetSlug }],
        });
      } else {
        // If city already exists, push the street to its streets array
        organizedStreets[existingCityIndex].streets.push({
          street,
          slug: streetSlug,
        });
      }
    });
    return organizedStreets;
  } catch (error) {
    console.error("Error fetching streets:", error);
    return [];
  }
};

export default async function Cities() {
  const data = await fetchStreets();

  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-MainOrange uppercase ">
        Villes
      </h2>
      <ul className="text-white font-medium">
        {data?.map((item, key) => (
          <City key={key} item={item} />
        ))}
      </ul>
    </div>
  );
}
