import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/modules/Home_page/Header"), {
    loading: () => <p></p>,
  }),
  Hero = dynamic(() => import("@/modules/City_page/Hero"), {
    loading: () => <p></p>,
  }),
  Steps = dynamic(() => import("@/modules/Home_page/RepairServiceSection"), {
    loading: () => <p></p>,
  }),
  Models = dynamic(() => import("@/modules/Global/Models"), {
    loading: () => <p></p>,
  }),
  Repair = dynamic(() => import("@/modules/City_page/Repair"), {
    loading: () => <p></p>,
  }),
  MobileRepair = dynamic(() => import("@/modules/City_page/Mobile_repair"), {
    loading: () => <p></p>,
  }),
  Service = dynamic(() => import("@/modules/City_page/Service"), {
    loading: () => <p></p>,
  }),
  Testimonials = dynamic(() => import("@/modules/Home_page/Recomandations"), {
    loading: () => <p></p>,
  }),
  Footer = dynamic(() => import("@/modules/Home_page/Footer"), {
    loading: () => <p></p>,
  });

// Sanity
import { FetchData } from "@/Sanity/client";

const fetchStreet = async (slug) => {
  const query = `*[_type=='street' && slug.current == "${slug}"]{
    slug,
    street,
    city->{
      map
    },
    repair_title,
    repair_description,
    mobile_repair_title,
    mobile_repair_description,
    service_title,
    service_description
  }[0]`;
  try {
    const street = await FetchData(query);
    return street;
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
};

export default async function Home({ params }) {
  const data = await fetchStreet(params?.street);
  return (
    <div className="flex items-center justify-center w-full">
      <div className="h-auto w-full">
        <Header />
        <Hero title={`Besoin d’une reparation telephone à ${data?.street}`} />
        <Steps />
        <Models />
        <Testimonials />
        <Repair
          title={data?.repair_title}
          description={data?.repair_description}
        />
        <MobileRepair
          city={params?.city}
          map={data?.city?.map}
          title={data?.mobile_repair_title}
          description={data?.mobile_repair_description}
        />
        <Service
          title={data?.service_title}
          description={data?.service_description}
        />
        <Footer />
      </div>
    </div>
  );
}
