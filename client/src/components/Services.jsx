import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Video Editing",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "📹",
    },
    {
      title: "Mobile App ",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since .",
      icon: "📱",
    },
    {
      title: "Desktop App Development",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: "🖥️",
    },
    {
      title: "Programming Languages",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      icon: "💻",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-9"
    >{/* Titre de la section */}
      <div className="text-center mb-6">
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
    index === 0
      ? 'mr-2' // Espacement pour "Video Editing"
      : index === 1
      ? 'ml-2' // Espacement pour "Mobile App Development"
      : index === 2
      ? 'mr-2' // Espacement pour "Desktop App Development"
      : index === 3
      ? 'ml-2' // Espacement pour "Programming Languages"
      : ''
  }`}
>

        
            {/* Gradient de fond */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-10 rounded-lg"></div>

            {/* Icône */}
            <div className="text-3xl mb-2 text-gradient bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              {service.icon}
            </div>

            {/* Titre du service */}
            <h3 className="text-base font-semibold mb-1 text-center">{service.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-300 text-center">{service.description}</p>

            {/* Animation de survol */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity rounded-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
