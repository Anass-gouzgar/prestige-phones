"use client";
import { useState } from "react";
import Link from "next/link";

export default function RepairMethods() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`hover:underline flex items-center gap-1`}
      >
        <span>Modes de réparations</span>
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
          <li>
            <Link
              href="/modes-de-reparation/reparation-a-distance"
              className="hover:underline"
            >
              Réparation à distance
            </Link>
          </li>
          <li>
            <Link
              href="/modes-de-reparation/reparation-a-domicile"
              className="hover:underline"
            >
              Réparation à domicile
            </Link>
          </li>
          <li>
            <Link
              href="/modes-de-reparation/reparation-dans-notre-atelier"
              className="hover:underline"
            >
              Réparation dans notre atelier
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
