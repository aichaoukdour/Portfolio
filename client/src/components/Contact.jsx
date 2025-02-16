import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-700 text-soft-pink p-4 shadow-md mb-8 text-center">
      <section id="contact" className="w-full bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-700 rounded-lg px-3 py-4 flex flex-col items-center shadow-lg">
        <h2 className="text-5xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text px-4 py-9">
          CONTACT
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Informations */}
          <div className="max-w-md text-center md:text-left text-white">
            <h3 className="text-2xl font-semibold mb-4">Envoyez-moi un message</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="h-6 w-6 text-black" />
                <span className="text-lg">+212656034538</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="h-6 w-6 text-black" />
                <span>aichaoukdou02@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="h-6 w-6 text-black" />
                <span>Adresse: **********</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="p-6 bg-black rounded-lg shadow-lg max-w-sm w-full space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full p-3 rounded-md bg-gray-800 text-white outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-800 text-white outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 rounded-md bg-gray-800 text-white outline-none"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition">
              Envoyer
            </button>
          </form>
        </div>

        {status && <p className="mt-4 text-white">{status}</p>}
      </section>
    </div>
  );
};

export default Contact;
