import ecran from "@/public/assets/images/steps/step3/icon-ecran.png";
import Batterie from "@/public/assets/images/steps/step3/icon-batterie.png";
import Connecteur from "@/public/assets/images/steps/step3/icon-charge.png";
import arriére from "@/public/assets/images/steps/step3/icon-vitre.png";
import iphone_x from "@/public/assets/images/steps/step1/iphone-x.png";
import ipad_air_2 from "@/public/assets/images/steps/step1/ipad-air-2.png";
import p10 from "@/public/assets/images/steps/step1/p10.png";
import MN0005671471_1 from "@/public/assets/images/steps/step1/MN0005671471_1.jpg";
import Samsung_Galaxy_S8_1 from "@/public/assets/images/steps/step1/Samsung-Galaxy-S8-1.png";
import Sony_Xperia_XZ3_Blog_SFAM from "@/public/assets/images/steps/step1/Sony-Xperia-XZ3-Blog-SFAM.png";
// fetch data
const data = [
  // element 1
  {
    title: "Samsung",
    image: Samsung_Galaxy_S8_1,
    models: [
      {
        title: "S10",
        problems: [
          { title: "S10 Ecran complet", image: ecran, price: 100 },
          { title: "S10 Batterie", image: Batterie, price: 80 },
          { title: "S10 Connecteur de charge", image: Connecteur, price: 200 },
          { title: "S10 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "M6s",
        problems: [
          { title: "M6s Ecran complet", image: ecran, price: 200 },
          { title: "M6s Batterie", image: Batterie, price: 30 },
          {
            title: "M6s Connecteur de charge",
            image: Connecteur,
            price: 200,
          },
          { title: "M6s Vitre arrière", image: arriére, price: 83 },
        ],
      },
    ],
  },

  // element 2
  {
    title: "iPhone",
    image: iphone_x,
    models: [
      {
        title: "i phone 14",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "i phone 10",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "i phone 9",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "i phone 8",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "i phone 4",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "iphone XR",
        problems: [
          { title: "XR Ecran complet", image: ecran, price: 200 },
          { title: "XR Batterie", image: Batterie, price: 30 },
          {
            title: "XR Connecteur de charge",
            image: Connecteur,
            price: 200,
          },
          { title: "XR Vitre arrière", image: arriére, price: 83 },
        ],
      },
    ],
  },
  // element 3
  {
    title: "iPhone",
    image: iphone_x,
    models: [
      {
        title: "i phone 14",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "iphone XR",
        problems: [
          { title: "XR Ecran complet", image: ecran, price: 200 },
          { title: "XR Batterie", image: Batterie, price: 30 },
          {
            title: "XR Connecteur de charge",
            image: Connecteur,
            price: 200,
          },
          { title: "XR Vitre arrière", image: arriére, price: 83 },
        ],
      },
      {
        title: "iphone 8",
        problems: [
          { title: "8 Ecran complet", image: ecran, price: 200 },
          { title: "8 Batterie", image: Batterie, price: 30 },
          {
            title: "8 Connecteur de charge",
            image: Connecteur,
            price: 200,
          },
          { title: "8 Vitre arrière", image: arriére, price: 83 },
        ],
      },
      {
        title: "iphone 7",
        problems: [
          { title: "7 Ecran complet", image: ecran, price: 200 },
          { title: "7 Batterie", image: Batterie, price: 30 },
          {
            title: "7 Connecteur de charge",
            image: Connecteur,
            price: 200,
          },
          { title: "7 Vitre arrière", image: arriére, price: 83 },
        ],
      },
    ],
  },
  // element 4
  {
    title: "iPhone",
    image: iphone_x,
    models: [
      {
        title: "i phone 14",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "iphone XR",
        problems: [
          { title: "XR Ecran complet", image: ecran, price: 200 },
          { title: "XR Batterie", image: Batterie, price: 30 },
          {
            title: "XR Connecteur de charge",
            image: Connecteur,
            price: 200,
          },
          { title: "XR Vitre arrière", image: arriére, price: 83 },
        ],
      },
    ],
  },
  // element 5
  {
    title: "iPhone",
    image: iphone_x,
    models: [
      {
        title: "i phone 14",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "iphone XR",
        problems: [
          { title: "XR Ecran complet", image: ecran, price: 200 },
          { title: "XR Batterie", image: Batterie, price: 30 },
          {
            title: "XR Connecteur de charge",
            image: Connecteur,
            price: 200,
          },
          { title: "XR Vitre arrière", image: arriére, price: 83 },
        ],
      },
    ],
  },

  // element 6
  {
    title: "iPhone",
    image: iphone_x,
    models: [
      {
        title: "i phone 14",
        problems: [
          { title: "IPH14  Ecran complet", image: ecran, price: 100 },
          { title: "IPH14 Batterie", image: Batterie, price: 80 },
          { title: "IPH14 Vitre arrière", image: arriére, price: 150 },
        ],
      },
      {
        title: "iphone XR",
        problems: [
          { title: "XR Ecran complet", image: ecran, price: 200 },
          { title: "XR Batterie", image: Batterie, price: 30 },
          {
            title: "XR Connecteur de charge",
            image: Connecteur,
            price: 200,
          },
          { title: "XR Vitre arrière", image: arriére, price: 83 },
        ],
      },
    ],
  },
];

export default data;
