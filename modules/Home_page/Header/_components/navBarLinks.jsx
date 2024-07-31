import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

// components
import Services from "./Services.jsx";

// icons
import phoneCallIcon from "@/public/assets/icons/icons/phone-call.svg";

const NavBarLinks = ({ items }) => {
  return (
    <div className="h-full text-center flex flex-col justify-center items-center gap-7 text-xl font-light">
      {items.map((item, key) => {
        return (
          <Fragment key={key}>
            <Link href={item.url} className="">
              {item.name}
            </Link>
            {key === 0 && <Services />}
          </Fragment>
        );
      })}
      <Link
        href="/simulateur"
        className="bg-white text-MainOrange py-2 px-7 rounded-lg"
      >
        Contactez-Nous
      </Link>
      <Link href="tel:0780801455" className="flex items-center gap-2">
        <Image src={phoneCallIcon} className="w-5" alt="phone call icon" />
        <span>07 80 80 14 55</span>
      </Link>
    </div>
  );
};

export default NavBarLinks;
