import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Experiences from './components/Experiences';
import Contact from './components/Contact'
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Portfolio />
      <Services />
      
      <Experiences />
      
      <Contact />
    </div>
  );
};

export default App;
