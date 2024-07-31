"use client";
import Link from "next/link";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const NousContacter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setFormData] = useState({
    full_name: "",
    entreprise: "",
    email: "",
    phone_nbr: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Manual validation
    const errors = {};
    if (!data.full_name) {
      errors.full_name = "Votre nom complet est requis.";
    }
    if (!data.entreprise) {
      errors.entreprise = "Le nom de votre entreprise est requis.";
    }
    if (!data.email) {
      errors.email = "Votre email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Veuillez entrer un email valide.";
    }
    if (!data.phone_nbr) {
      errors.phone_nbr = "Votre numéro de téléphone est requis.";
    }
    // else if (!/^\d{10}$/.test(data.phone_nbr)) {
    //   errors.phone_nbr = "Veuillez entrer un numéro de téléphone valide.";
    // }
    if (!data.message) {
      errors.message = "Votre message est requis.";
    }

    if (Object.keys(errors).length > 0) {
      toast.error(Object.values(errors).join(", "), {
        hideProgressBar: true,
        autoClose: 5000,
        type: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("entreprise", data.entreprise);
    formData.append("email", data.email);
    formData.append("phone_nbr", data.phone_nbr);
    formData.append("message", data.message);

    try {
      setLoading(true);
      const response = await fetch("/api/nousContacter", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Email envoyé avec succès !", {
          hideProgressBar: true,
          autoClose: 2000,
        });

        setFormData({
          full_name: "",
          entreprise: "",
          email: "",
          phone_nbr: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email.");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.message, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1600px] flex justify-center items-center">
        <div className="md:w-[80%] w-full flex flex-col gap-y-14 px-2 pb-10">
          <ToastContainer />
          <div className="flex flex-col gap-4">
            <h3 className="text-MainOrange font-medium sm:text-2xl text-xl">
              Nous Contacter
            </h3>
            <h1 className="text-4xl font-extrabold text-Gray">
              Pour toute demande d'informations complémentaire, contactez-nous
            </h1>
          </div>
          <div id="contact" className="flex flex-col gap-2">
            <h3 className="text-MainOrange font-medium text-lg">Solution 1:</h3>
            <h1 className="text-2xl font-extrabold text-Gray">
              Appelez nous, notre équipe est disponible de 9h30 à 18h30
            </h1>
            {/* tel button */}
            <button className="w-fit hover:-translate-y-1 hover:shadow-xl duration-300 mt-10">
              <Link
                href="tel:0780801455"
                className="bg-MainOrangeLight py-2 px-5 rounded-lg text-white"
              >
                07 80 80 14 55
              </Link>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-MainOrange font-medium text-lg">Solution 2:</h3>
            <h1 className="text-2xl font-extrabold text-Gray">
              Remplissez le formulaire ci-dessous et nous vous recontacterons au
              plus vite
            </h1>
            {/* form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-10">
              {/* First Row */}
              <div className="flex flex-col justify-between md:flex-row gap-7">
                <div className="flex flex-col w-full md:w-1/2 gap-1">
                  <label
                    htmlFor="full_name"
                    className="font-medium text-MainOrange"
                  >
                    Votre nom complet *
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="full_name"
                    placeholder="Votre nom complet ..."
                    className="text-sm border-b border-Gray focus:placeholder:text-MainOrangeLight focus:border-MainOrangeLight outline-none py-2"
                    value={data.full_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-1">
                  <label
                    htmlFor="entreprise"
                    className="font-medium text-MainOrange"
                  >
                    Nom de votre entreprise *
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    placeholder="Nom de votre entreprise ..."
                    className="text-sm border-b border-Gray focus:placeholder:text-MainOrangeLight focus:border-MainOrangeLight outline-none py-2"
                    value={data.entreprise}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col justify-between md:flex-row gap-7">
                <div className="flex flex-col w-full md:w-1/2 gap-1">
                  <label
                    htmlFor="email"
                    className="font-medium text-MainOrange"
                  >
                    Votre email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Votre email ..."
                    className="text-sm border-b border-Gray focus:placeholder:text-MainOrangeLight focus:border-MainOrangeLight outline-none py-2"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-1">
                  <label
                    htmlFor="phone_nbr"
                    className="font-medium text-MainOrange"
                  >
                    Votre numero de telephone *
                  </label>
                  <input
                    type="tel"
                    id="phone_nbr"
                    name="phone_nbr"
                    placeholder="Votre numero de telephone ..."
                    className="text-sm border-b border-Gray focus:placeholder:text-MainOrangeLight focus:border-MainOrangeLight outline-none py-2"
                    value={data.phone_nbr}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Third Row */}
              <div className="flex flex-col justify-between md:flex-row">
                <div className="flex flex-col w-full gap-1">
                  <label
                    htmlFor="message"
                    className="font-medium text-MainOrange"
                  >
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Votre message ..."
                    className="text-sm border-b border-Gray focus:placeholder:text-MainOrangeLight focus:border-MainOrangeLight outline-none py-2"
                    value={data.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
              </div>

              {/* button envoyer */}
              <div className="text-center md:text-justify">
                <input
                  type="submit"
                  value={loading ? "Envoi ..." : "Envoyer"}
                  className="mt-5 bg-gradient-to-r from-MainOrange to-MainOrangeLight w-full max-w-[300px] text-lg text-center text-white py-2 rounded-[10px] hover:opacity-90 cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NousContacter;
