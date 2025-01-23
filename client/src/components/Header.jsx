import React from 'react';

const Header = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
  ];

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white shadow-md">
      {/* Logo with gradient and subtle bounce animation */}
      <div className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-bounce-slow">
        FS
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6" role="navigation" aria-label="Main Navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative group text-lg font-semibold hover:text-soft-pink transition-colors duration-200 ease-in-out"
            aria-label={`Navigate to ${link.label}`}
          >
            {link.label}
            {/* Underline animation */}
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-soft-pink transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        ))}

        {/* Contact button with gradient and hover effects */}
        <a
          href="#contact"
          className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transform hover:scale-105 transition-transform duration-300 animate-pulse"
          aria-label="Contact Me"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
