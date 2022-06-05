import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {OrbitControls, Html} from '@react-three/drei'

import './App.css';
import styles from './assets/layout.module.css';

import Home from "./components/about/Home";
import About from './components/about/About';
import Navbar from "./components/Navbar";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import RingSphere from "./components/3dcomp/RingSphere";

function App() {
  return (
    <>
    
      <section className={styles.Home}>
      <Canvas >
        <Suspense fallback= {null}>
          <pointLight position={[5, 5, 25]} />
          <ambientLight position={[6, 6, 55]} />
          <Home/>
        </Suspense>
      <OrbitControls enableZoom={false}/>
      </Canvas>
      </section>

      <section className={styles.About}>
        <About/>
      </section>
      {/* <Navbar /> */}

      <section className={styles.skill_section}>
        <Skills/>
      </section>

      <section className={styles.Projects}>
      <Canvas>
        <Suspense fallback= {null}>
          <pointLight position={[5, 5, 5]} />
          <Projects />
        </Suspense>
        <OrbitControls enableZoom={false}/>
      </Canvas>
      <Canvas>
        <Suspense fallback= {null}>
          <pointLight position={[5, 5, 5]} />
          <Projects />
        </Suspense>
        <OrbitControls enableZoom={false}/>
      </Canvas>
      <Canvas>
        <Suspense fallback= {null}>
          <pointLight position={[5, 5, 5]} />
          <Projects />
        </Suspense>
        <OrbitControls enableZoom={false}/>
      </Canvas>
      </section>
      
      <Contact />
        <Canvas className={styles.canvas}>
          <Suspense fallback= {null}>
            <RingSphere args={[0.1, 0.901, 9]} position={[ 1.1, 1.1, 1.6]}/>
          </Suspense>
          <ambientLight intensity = {0.5}/>
          <pointLight position={[0,0,5]} intensity = {0.5}/>
          <OrbitControls enableZoom={false}/>
        </Canvas>
    </>
  );
}

export default App;