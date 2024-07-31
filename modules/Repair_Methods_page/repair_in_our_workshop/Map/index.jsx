export default function Map() {
  return (
    <div className="w-full flex justify-center items-center sm:px-5 px-2">
      <div className="max-w-[1000px] w-full flex flex-col items-center gap-10 pt-16 pb-28">
        <div className="flex flex-col gap-5 text-Gray">
          {/* title */}
          <h1 className="font-bold text-center [font-size:_clamp(2.25em,5vw,3rem)]">
            Où trouver la boutique de Prestige Phone ?
          </h1>
          <div className="text-sm text-center flex flex-col items-center">
            <span className="font-light">Notre atelier est situé au :</span>
            <span className="font-semibold">
              21 Av. Anatole France, 93500 Pantin, France
            </span>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.1397382159876!2d2.4248043!3d48.893674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d0294e013dd%3A0x4e9eebca745dae0f!2sR%C3%A9paration%20iPhone%20Pantin%20%7C%20T%C3%A9l%C3%A9phone%20%7C%20Ordinateur%20%7C%20Tablette%20-%20IPHONE%20PRESTIGE%20SAS!5e0!3m2!1sen!2sma!4v1720649545645!5m2!1sen!2sma"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        ></iframe>

        <div className="w-full max-w-[700px] flex flex-col gap-10 text-Gray">
          <h1 className="font-bold text-center [font-size:_clamp(2.25em,5vw,3rem)]">
            Comment s'y rendre
          </h1>
          <p className="text-Gray text-sm">
            L’atelier de réparation Prestige Phone est facile d’accès, en effet
            il se situe à 3 min à pied de la station de métro 5 Bobigny-Pantin
            Raymond Queneau
          </p>
        </div>
      </div>
    </div>
  );
}
