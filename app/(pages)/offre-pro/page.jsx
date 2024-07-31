import Header from "../../../modules/Home_page/Header";
import Footer from "../../../modules/Home_page/Footer";
import dynamic from "next/dynamic";
import NousContacter from "./_components/nousContacter";
import ServiceCoverage from "./_components/ServiceCoverage";
import Testimonial from "./_components/Testimonial";
const Hero = dynamic(
    () => import("@/modules/Repair_Methods_page/Global/Hero"),
    {
      loading: () => <p></p>,
    }
  ),
  Adaptation = dynamic(
    () => import("@/modules/Home_page/Adaptations_Section/index.jsx"),
    {
      loading: () => <p></p>,
    }
  );

function Index() {
  return (
    <div className="flex flex-col mx-auto h-auto ">
      <div className="">
        <Header />
        <Hero title="Prestige Phone, des professionnels au service des professionnels" />
      </div>

      <div className="max-w-[1600px] relative flex flex-col gap-16 md:w-[80%] w-full place-items-center mx-auto md:mb-8 px-2 mt-10">
        {/* first section */}
        <div className=" flex flex-col gap-6 ">
          <h2 className="text-MainOrange text-xl font-medium">
            Prestige Phone répare les flottes de téléphones d'entreprises de
            toutes tailles
          </h2>
          <h1 className="text-4xl font-extrabold text-Gray">
            Chez Prestige Phone, nous nous adaptons aux besoins des entreprises
          </h1>
          <p className="text-sm text-Gray font-light">
            Nous connaissons bien les préoccupations des professionnels, c'est
            pour cela que nous proposons une offre adaptée aux entreprises et à
            leurs exigences. Depuis 2011, Prestige Phone intervient sur les
            appareils des particuliers mais également sur des flottes de
            téléphones d'entreprises. Nous savons à quel point les appareils
            électroniques tels que les téléphones et les tablettes numériques se
            sont imposés dans notre vie privée mais également dans le monde du
            travail comme des outils indispensables. Nous savons également qu'en
            tant qu'entreprise, vos appareils sont nombreux et qu'il peut être
            compliqué d'en gérer la flotte, malgré les besoins urgents que vous
            connaissez. C'est pour cela qu'Prestige Phone propose un service de
            réparation des flottes de téléphones qui s'adapte aux entreprises.
          </p>
        </div>
        {/* offre Pro section */}
        <div className=" flex flex-col gap-6">
          <h2 className="text-MainOrange text-xl font-medium">
            Notre offre Pro
          </h2>
          <h1 className="text-4xl font-extrabold text-Gray">
            Prestige Phone pour les entreprises, comment ça fonctionne ?
          </h1>
          <p className="text-sm text-Gray font-light">
            Pour satisfaires les professionnels, Prestige Phone vient réparer
            les téléphones défaillants de votre flotte et les soumets à une
            batterie de tests afin de s'assurer de leur bon fonctionnement.
            Ainsi, faire réparer sa flotte de téléphones professionnels par
            Prestige Phone constitue un gain de temps et vous évite la gestion
            des déplacements. Nous effectuons les différentes réparations avec
            des pièces de qualité, originales ou identiques aux pièces
            originales des constructeurs car nous savons qu'il est indispensable
            que les professionnels soient équipés des meilleurs appareils. Chez
            Prestige Phone, nous vous garantissons également des prix avantageux
            sur la réparation de votre flotte de téléphones et nous pouvons vous
            proposer une facturation mensuelle pour répondre aux problématiques
            de votre entreprise. Alors, si vous êtes professionnel, n'hésitez
            plus : confiez-nous vos téléphones à réparer !
          </p>
        </div>
      </div>
      <Adaptation />
      <NousContacter />
      <ServiceCoverage />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Index;
