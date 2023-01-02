import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { AlertExample } from './components/AlertExample';
import { NavbarBootstrap } from './components/NavbarBootstrap';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Works } from './components/Works';
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <NavbarBootstrap/>
        <About/>
        <AboutMe/>
        <Skills/>
        <Works/>
        <Contact/>

      {/*  <AlertExample/> */}
      </header>
      <Footer/>
    </div>
  );
}

export default App;
