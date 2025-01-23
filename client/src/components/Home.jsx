import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-dark-blue to-black text-white overflow-hidden"
    >
      {/* Animated Background Traces */}
      <div className="absolute inset-0">
        {/* Trace 1 */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 opacity-25 rounded-full filter blur-3xl animate-pulse"></div>

        {/* Trace 2 */}
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 opacity-20 rounded-full filter blur-2xl animate-pulse delay-2000"></div>

        {/* Trace 3 */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-500 opacity-15 rounded-full filter blur-2xl animate-pulse delay-4000"></div>
      </div>

      {/* Central Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Main Title */}
        <h1 className="text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          I'm a <span className="text-white">Full Stack</span> <br />
          <span className="text-indigo-500">Software Engineer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          Building modern, dynamic, and responsive applications with a passion for innovation.
        </p>

        {/* Call-to-Action Button */}
        <a
  href="https://github.com/aichaoukdour"  // Remplacez par votre lien GitHub
  target="_blank"  // Ouvrir dans un nouvel onglet
  rel="noopener noreferrer"  // Sécurité supplémentaire
>
  <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition-transform duration-200 transform hover:scale-110 shadow-xl">
    View My Projects
  </button>
</a>

      </div>
    </section>
  );
};

export default Home;
