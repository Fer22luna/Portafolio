import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { NavbarBootstrap } from './components/NavbarBootstrap';
import { Skills } from './components/Skills/Skills.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Hero } from './components/Hero/Hero';
import { Contact } from './components/Contact/Contact.jsx';
import { Works } from './components/Works/Works.jsx';
import { AboutMe } from './components/AboutMe/AboutMe.jsx';

function App() {
  return (
    <div className="App container ">
      <header className="App-header">
        <NavbarBootstrap/>
        <Hero/>
        <AboutMe/>
        <Skills/>
        <Works/>
        <Contact/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
