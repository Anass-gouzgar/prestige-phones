// components
import Header from "./_components/Header";
import Devices from "./_components/Devices";

// Sanity
import { FetchData } from "@/Sanity/client";

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

export default async function Models() {
  const devices = await fetchDevices();
  return (
    <div className="w-full flex justify-center items-center pb-16 px-2">
      <div className="max-w-[1200px] flex flex-col gap-16">
        <Header />
        <Devices data={devices} />
      </div>
    </div>
  );
}
