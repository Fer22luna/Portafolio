import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { NavbarBootstrap } from './components/NavbarBootstrap';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer/Footer.jsx';
import { About } from './components/Hero/Hero';
import { Contact } from './components/Contact/Contact.jsx';
import { Works } from './components/Works/Works.jsx';
import { AboutMe } from './components/AboutMe/AboutMe.jsx';

function App() {
  return (
    <div className="App container ">
      <header className="App-header">
        <NavbarBootstrap/>
        <About/>
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
