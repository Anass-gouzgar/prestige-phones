import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/modules/Home_page/Header"), {
    loading: () => <p></p>,
  }),
  Hero = dynamic(() => import("@/modules/Repair_Methods_page/Global/Hero"), {
    loading: () => <p></p>,
  }),
  Map = dynamic(
    () => import("@/modules/Repair_Methods_page/repair_in_our_workshop/Map"),
    {
      loading: () => <p></p>,
    }
  ),
  Steps = dynamic(() => import("@/modules/Home_page/RepairServiceSection"), {
    loading: () => <p></p>,
  }),
  Models = dynamic(() => import("@/modules/Global/Models"), {
    loading: () => <p></p>,
  }),
  Testimonials = dynamic(() => import("@/modules/Home_page/Recomandations"), {
    loading: () => <p></p>,
  }),
  Quality = dynamic(
    () =>
      import("@/modules/Repair_Methods_page/repair_in_our_workshop/Quality"),
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
        <Hero title="L'Atelier de réparation" />
        <Map />
        <Steps />
        <Models />
        <Testimonials />
        <Quality />
        <Footer />
      </div>
    </div>
  );
}
