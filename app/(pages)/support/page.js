import Header from "../../../modules/Home_page/Header";
import Footer from "../../../modules/Home_page/Footer";
import dynamic from "next/dynamic";
import NousContacter from "./_components/nousContacter";
const Hero = dynamic(
  () => import("@/modules/Repair_Methods_page/Global/Hero"),
  {
    loading: () => <p></p>,
  }
);

export default function page() {
  return (
    <div className="flex flex-col mx-auto h-auto ">
      <div className="">
        <Header />
        <Hero title="Comment nous contacter ?" />
      </div>
      <NousContacter />
      <Footer />
    </div>
  );
}
