import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Big Data & Cloud",
      description: "Worked with large datasets, cloud platforms, and optimized data pipelines.",
      icon: "☁️",
    },
    {
      title: "Mobile App Development",
      description: "Built and optimized mobile apps, integrated APIs, and ensured performance.",
      icon: "📱",
    },
    {
      title: "Desktop App Development",
      description: "Developed robust desktop applications with a focus on UI/UX and security.",
      icon: "🖥️",
    },
    {
      title: "Programming Languages",
      description: "Gained expertise in multiple languages, writing clean and scalable code.",
      icon: "💻",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-9"
    >
      {/* Titre de la section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Services
        </h2>
        <p className="mt-2 text-sm text-gray-400">Explore my services and expertise</p>
      </div>

      {/* Grille des services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 justify-center items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center w-[80%] max-w-[280px] mx-auto bg-gradient-to-r from-black-800 to-black-900 p-4 rounded-lg shadow-[0_0_15px_rgba(255,99,247,0.8),0_0_30px_rgba(99,102,241,0.8)] border border-gray-700 transition-transform transform hover:scale-105 ${
              index % 2 === 0 ? 'mr-2' : 'ml-2'
            }`}
          >
            {/* Gradient de fond */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-10 rounded-lg"></div>

            {/* Icône */}
            <div className="text-3xl mb-2 text-gradient bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              {service.icon}
            </div>

            {/* Titre du service */}
            <h3 className="text-sm font-semibold mb-1 text-center">{service.title}</h3>

            {/* Description avec taille très réduite */}
            <p className="text-[8px] text-gray-300 text-center">{service.description}</p>

            {/* Animation de survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity rounded-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
