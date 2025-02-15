
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Schedule from './components/Schedule/Schedule';
import Awards from './components/Awards/Awards';
import Rules from './components/Rules/Rules';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Awards />
      <Rules />
      <Footer />
    </div>
  );
};

export default App;