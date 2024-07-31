// components
import Header from "./_components/Header";
import Step from "./_components/Step";

export default function Steps() {
  const steps = [
    {
      title: "Crac ! Votre téléphone est cassé",
      description:
        "Vous avez des problèmes de batterie, l’écran de votre téléphone s’est brisé, son appareil photo ne fonctionne plus, le bouton marche mal… Nous nous servons en permanence de nos téléphones et tablettes si bien qu’ils occupent une place importante dans notre vie professionnelle et privée. Alors, quand ils subissent une panne, c’est notre quotidien qui peut en être perturbé. C’est pour cette raison que Prestige Phone vous propose un service de réparation de téléphones et de tablettes numériques vous garantissant une qualité strictement identique aux pièces originales à des prix bas. Si vous rencontrez une panne sur votre smartphone ou votre tablette, contactez Prestige Phone !",
    },
    {
      title: "Faites réparer votre appareil par Prestige Phone",
      description:
        "Contactez Prestige Phone pour que nous fassions ensemble le diagnostic de votre appareil, et nous vous transmettrons un devis gratuitement. Si vous ne vous situez pas dans notre zone d’intervention, vous pouvez envoyer votre appareil à notre atelier bordelais par voie postale et nous y réaliserons la réparation que vous avez sollicité.",
    },
    {
      title:
        "Réparation à distance : envoyez un téléphone cassé, recevez un téléphone réparé",
      description:
        "La durée de la réparation peut évoluer en fonction de la nature de la panne que connaît votre appareil. Une fois votre smartphone arrivé dans notre atelier, nos techniciens effectuent la réparation demandée sous 24 à 48 heures et nous vous renvoyons votre téléphone à l’endroit que vous souhaitez. Résultat : votre téléphone cassé est réparé en moins de 48 heures sans que vous ayez eu à vous déplacer !",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1400px] flex flex-col gap-10 py-16 sm:px-5 px-2">
        <Header />

        <div className="w-full grid grid-cols-3 gap-10">
          {steps?.map((item, key) => (
            <Step key={key} step={item} index={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
