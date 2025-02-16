import React from "react";
import resume from './cv2025.27.11dev.pdf'; // Ajustez le chemin si nécessaire
import {
  FaUser,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaYoutube,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import profileImage from './pro.png';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-9"
    >
      {/* Titre */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          About <span>MySelf</span>
        </h1>
        <p className="mt-1 text-xs text-gray-400">
          I’m a passionate developer who loves creating innovative digital experiences.
        </p>
        <div className="mt-1 w-12 h-1 bg-pink-500 mx-auto"></div>
      </div>

      {/* Section Principale */}
      <div className="flex flex-wrap max-w-4xl items-center bg-gradient-to-b from-gray-900 to-black p-4 rounded-lg shadow-lg backdrop-blur-md border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl">
        {/* Section Image */}
        <div className="w-full md:w-2/5 p-20">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-lg shadow-md hover:shadow-lg transition-all duration-500"
            />
          </div>
        </div>

        {/* Section Détails */}
        <div className="w-full md:w-1/2 p-2">
          <h2 className="text-lg font-semibold mb-3 text-pink-500">
            Hello, I Am <span className="text-purple-500">Aicha Oukdour</span>
          </h2>
          <p className="text-xs text-gray-400 mb-6 leading-relaxed">
            I’m Aicha, a dedicated web developer from Morocco with a passion for technology and design. I thrive on solving problems and continuously seek to improve my skills through hands-on projects and collaboration.
          </p>

          {/* Informations Personnelles */}
          <ul className="space-y-1 text-xs text-gray-400">
            <li className="flex items-center">
              <FaUser className="mr-2 text-pink-500" />
              <span className="text-pink-500">Name: </span> Aicha Oukdour
            </li>
            <li className="flex items-center">
              <FaBirthdayCake className="mr-2 text-pink-500" />
              <span className="text-pink-500">Age: </span> 22
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-pink-500" />
              <span className="text-pink-500">Address: </span> Morocco, Casa
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-pink-500" />
              <span className="text-pink-500">Phone Number: </span> +212656034538
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-pink-500" />
              <span className="text-pink-500">Email: </span> aichaoukdour02@gmail.com
            </li>
          </ul>

          {/* Liens Sociaux */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-lg text-pink-500 hover:text-purple-500 transition-transform transform hover:scale-105" />
            </a>
            <a
              href="https://github.com/aichaoukdour?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg text-pink-500 hover:text-purple-500 transition-transform transform hover:scale-105" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-lg text-pink-500 hover:text-purple-500 transition-transform transform hover:scale-105" />
            </a>
          </div>

          {/* Bouton Télécharger CV */}
          <div className="mt-4">
            <a
              href={resume} // Ajustez le chemin vers votre CV
              download
              className="px-4 py-2 text-xs bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-transform transform hover:scale-105 shadow-md"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
