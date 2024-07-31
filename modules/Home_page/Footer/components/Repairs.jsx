"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FetchData } from "@/Sanity/client";

export default function Repairs() {
  const [isOpen, setIsOpen] = useState(false);

  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      const query = `*[_type=='device'] | order(_createdAt asc) {
        title,
        slug
      }`;
      try {
        const devices = await FetchData(query);
        setDevices(devices);
      } catch (error) {
        console.error("Error fetching devices:", error);
        setDevices([]);
      }
    };
    fetchDevices();
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`hover:underline flex items-center gap-1`}
      >
        <span>Réparations</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`w-4 h-4 ${isOpen && "rotate-180"} duration-300`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-2 pt-2">
          {devices?.map((item, key) => (
            <li key={key}>
              <Link
                href={`/reparation/${item?.slug?.current}`}
                className="w-fit hover:underline"
              >
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
