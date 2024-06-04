"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({
          email: "",
          sujet: "",
          message: "",
        });
        toast.success("Votre message a bien été envoyé");
      } else {
        toast.error("Erreur lors de l'envoi du message");
      }
    } catch (error) {
      toast.error("Erreur lors de la soumission du formulaire :", error);
    }
  };

  return (
    <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-center text-center gap-12 xl:px-80 flex-wrap justify-center items-center">
      <div className="w-full">
        <div className="flex w-full">
          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl w-full">
            <h2 className="text-primary font-manrope text-4xl font-semibold leading-10 mb-11">
              Nous écrire
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Sujet"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-10 resize-none"
                placeholder="Message"
                required
              />
              <button
                type="submit"
                className="btn w-full h-12 text-white text-base font-semibold leading-6 transition-all duration-700 hover:bg-primary bg-primary shadow-sm"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
