
import React from 'react';
import './App.css';
import styles from './assets/layout.module.css';
import { Button } from 'antd';
import About from "./components/about/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <About />
      <Navbar />
      <Projects />
      <Skills />
      <Contact />
  </main>
  );
}

export default App;