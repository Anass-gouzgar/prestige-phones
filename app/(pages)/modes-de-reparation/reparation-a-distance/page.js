import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/modules/Home_page/Header/index.jsx"), {
    loading: () => <p></p>,
  }),
  Hero = dynamic(() => import("@/modules/Repair_Methods_page/Global/Hero"), {
    loading: () => <p></p>,
  }),
  Steps = dynamic(() => import("@/modules/Home_page/RepairServiceSection"), {
    loading: () => <p></p>,
  }),
  HowItWorks = dynamic(
    () => import("@/modules/Repair_Methods_page/remote_repair/How_it_works"),
    {
      loading: () => <p></p>,
    }
  ),
  RemoteSteps = dynamic(
    () => import("@/modules/Repair_Methods_page/remote_repair/Steps"),
    {
      loading: () => <p></p>,
    }
  ),
  Solution = dynamic(
    () => import("@/modules/Repair_Methods_page/remote_repair/Solution"),
    {
      loading: () => <p></p>,
    }
  ),
  Testimonials = dynamic(
    () => import("@/modules/Home_page/Recomandations/index"),
    {
      loading: () => <p></p>,
    }
  ),
  Footer = dynamic(() => import("@/modules/Home_page/Footer/index.jsx"), {
    loading: () => <p></p>,
  });
export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="h-auto sm:max-w-[1600px] w-full">
        <Header />
        <Hero title="La réparation de téléphone à distance : vous en rêviez ? Prestige le fait !" />
        <Steps />
        <HowItWorks />
        <RemoteSteps />
        <Solution />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
