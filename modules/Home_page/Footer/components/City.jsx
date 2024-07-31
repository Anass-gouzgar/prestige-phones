"use client";
import Link from "next/link";
import { useState } from "react";

export default function City({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="w-full flex flex-col items-center gap-3">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-fit h-fit hover:underline flex justify-center items-center gap-1"
      >
        <span>{item?.city}</span>

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
        <ul className="flex flex-col text-sm gap-1">
          {item?.streets?.map((subItem, subKey) => (
            <li key={subKey}>
              <Link
                href={`/ville/${item?.slug}/${subItem?.slug}`}
                className="hover:text-MainOrange"
              >
                Réparation {subItem?.street}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
