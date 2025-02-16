import React, { useState, useEffect } from "react";
import { FaHeart, FaGithub } from "react-icons/fa";

// Importer les images locales
import proj1 from "./proj1.jpg";
import proj2 from "./proj2.jpg";
import proj3 from "./proj3.jpg";
import proj4 from "./proj4.jpg";  // Ajoutez l'image pour le Dashboard
import proj5 from "./proj5.jpg";  // Ajoutez l'image pour le Travel Website

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Carte des noms de projet et leurs images correspondantes
  const imageMap = {
    proj1: proj1,
    proj2: proj2,
    proj3: proj3,
    proj4: proj4,  // Ajoutez proj4 pour le Dashboard
    proj5: proj5,  // Ajoutez proj5 pour le Travel Website
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects");
        const data = await response.json();
        console.log("Données reçues du backend:", data); // Affiche les projets reçus
        setProjects(data); // Utiliser les données dans le state
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const handleLike = async (index) => {
    const projectName = projects[index].name;
    try {
      // Envoi d'une requête pour liker un projet
      const response = await fetch(
        `http://localhost:5000/projects/${projectName}/like`,
        {
          method: "POST",
        }
      );

      const result = await response.json();
      if (result.success) {
        // Mettre à jour les likes du projet après la réponse du serveur
        setProjects((prevProjects) =>
          prevProjects.map((project, idx) =>
            idx === index ? { ...project, likes: result.likes } : project
          )
        );
      }
    } catch (error) {
      console.error("Error liking project:", error);
    }
  };

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-gray-900 to-black text-white px-10 py-1 flex flex-col items-center"
    >
      {/* Title */}
      <div className="text-center mt-12">
        <h1 className="text-4xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Portfolio Projects
        </h1>
        <p className="mt-1 text-xs text-gray-400">Discover My Latest Creations</p>
      </div>

      {/* Horizontal Layout */}
      <div className="flex flex-wrap justify-center gap-4 p-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-900 to-black text-white px-4 py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 w-64 mb-8"
          >
            {/* Image Section */}
            <div className="overflow-hidden rounded-md">
              <img
                src={imageMap[project.image]}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-4">
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-purple-400 text-lg"
              >
                <FaGithub />
              </a>
            </div>

            {/* Like Button */}
            <div className="flex items-center justify-between mt-3 text-sm">
              <button
                className="flex items-center gap-1 text-pink-500 hover:text-purple-400 transition"
                onClick={() => handleLike(index)}
              >
                <FaHeart className="text-purple bg-purple" /> Like
              </button>
              <span className="text-gray-400">{project.likes} Likes</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 text-white rounded-lg p-6 max-w-lg w-full shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-400 mb-6">
              {selectedProject.detailedDescription || selectedProject.description}
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
                onClick={closeProjectDetails}
              >
                Close
              </button>
              <a
                href={selectedProject.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-transparent border border-pink-500 text-pink-500 rounded-md font-medium text-sm hover:bg-pink-500 hover:text-white transition flex items-center gap-2"
              >
                <FaGithub className="text-lg bg-purple" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
