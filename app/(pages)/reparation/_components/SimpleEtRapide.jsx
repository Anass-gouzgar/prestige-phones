import React from "react";

const SimpleEtRapide = ({ brand }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="sm:max-w-[1600px] flex flex-col m-12 md:px-36">
        <h3 className="text-MainOrange text-3xl font-bold mb-4">
          Simple et rapide
        </h3>
        <h1 className="md:text-5xl font-bold mb-10">
          La réparation de votre {" " + brand} chez Prestige Phone
        </h1>
        <p className="mb-8">
          Avant d'élargir la gamme de ses offres, Prestige Phone effectuait
          exclusivement la réparation de {" " + brand}. Ainsi, depuis 2011, nous
          intervenons sur ce smartphone très populaire, que nos techniciens
          connaissent dorénavant sur le bout des doigts. C'est grâce à cette
          expertise que nous proposons un service pas cher, réalisé par des
          professionnels de la téléphonie.
        </p>
        <p>
          Que ce soit pour une réparation d'écran, un changement de batterie ou
          d'appareil photo, une désoxydation ou même un remplacement de bouton,
          vous pouvez nous faire confiance, on s'occupera de votre iPhone comme
          si c'était le nôtre !
        </p>
      </div>
    </div>
  );
};

export default SimpleEtRapide;
