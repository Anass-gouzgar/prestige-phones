import Image from "next/image";
import Link from "next/link";
import logo from "/public/assets/images/logo-footer.svg";

// components
import Repairs from "./components/Repairs";
import RepairMethods from "./components/RepairMethods";
import Cities from "./components/Cities";

function Index() {
  return (
    <footer className="bg-[#3E3E3E]">
      <div className="flex justify-center pt-10 pb-8 ">
        <Image src={logo} className="" alt="logo" />
      </div>
      <div className="mx-auto w-full text-center max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 ">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-MainOrange uppercase ">
              Prestige Phone
            </h2>
            <ul className="text-white  font-medium">
              <li className="mb-4">
                <Link href="/" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li className="mb-4 flex justify-center items-center">
                <Repairs />
              </li>
              <li className="mb-4 flex justify-center items-center">
                <RepairMethods />
              </li>
              <li className="mb-4">
                <Link href="/offre-pro" className="hover:underline">
                  Offre pro
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/support" className="hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-MainOrange uppercase ">
              Réparations
            </h2>
            <ul className="text-white  font-medium">
              <li className="mb-4">
                <Link href="/reparation/IPhone" className="hover:underline">
                  Réparation iPhone
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/reparation/Samsung" className="hover:underline">
                  Réparation Samsung
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/reparation/Huawei" className="hover:underline">
                  Réparation Huawei
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/reparation/Ipad" className="hover:underline">
                  Réparation iPad
                </Link>
              </li>
            </ul>
          </div>
          <Cities />
          {/* <div>
            <h2 className="mb-6 text-sm font-semibold text-MainOrange uppercase ">
              Download
            </h2>
            <ul className="text-white  font-medium">
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  iOS
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Android
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  Windows
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  MacOS
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="flex justify-center py-4 border-t-4 border-MainOrange pb-14">
          <p className="text-white text-sm font-medium">
            &copy; {new Date().getFullYear()} by
            <Link href="#" className="hover:underline ml-1 mr-1">
              Prestige Phone
            </Link>
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Index;
