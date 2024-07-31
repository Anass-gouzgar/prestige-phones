import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/modules/Home_page/Header/index.jsx"), {
    loading: () => <p></p>,
  }),
  Hero = dynamic(() => import("@/modules/Home_page/Hero/index.jsx"), {
    loading: () => <p></p>,
  }),
  Reparation = dynamic(
    () => import("@/modules/Home_page/Reparation/index.jsx"),
    {
      loading: () => <p></p>,
    }
  ),
  Recomandations = dynamic(
    () => import("@/modules/Home_page/Recomandations/index"),
    {
      loading: () => <p></p>,
    }
  ),
  Bar = dynamic(() => import("@/modules/Home_page/Bar/index.jsx"), {
    loading: () => <p></p>,
  }),
  RepairServiceSection = dynamic(
    () => import("@/modules/Home_page/RepairServiceSection/index.jsx"),
    {
      loading: () => <p></p>,
    }
  ),
  Faq = dynamic(() => import("@/modules/Home_page/Faq/index.jsx"), {
    loading: () => <p></p>,
  }),
  Engagements = dynamic(
    () => import("@/modules/Home_page/Engagements/index.jsx"),
    {
      loading: () => <p></p>,
    }
  ),
  Map = dynamic(() => import("@/modules/Home_page/Map_Section/index.jsx"), {
    loading: () => <p></p>,
  }),
  Adaptaion = dynamic(
    () => import("@/modules/Home_page/Adaptations_Section/index.jsx"),
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
      <div className="h-auto w-full">
        <Header />
        <Hero />
        <Adaptaion />
        <Reparation />
        <Recomandations />
        <RepairServiceSection />
        <Engagements />
        <Faq />
        <Bar />
        <Map />
        <Footer />
      </div>
    </div>
  );
}
