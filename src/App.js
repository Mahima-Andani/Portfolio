import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
import './App.css';
import styles from './assets/layout.module.css';
import About from "./components/about/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";
import RingSphere from "./components/3dcomp/RingSphere";
import Rings from "./components/3dcomp/Rings";
import Fiber from './components/3dcomp/Fiber';

function App() {
  return (
    <>
    
      <section className={styles.About}>
      <Canvas>
        <Suspense fallback= {null}>
          <pointLight position={[5, 5, 5]} />
          <About/>
        </Suspense>
        <OrbitControls enableZoom={false}/>
      </Canvas>
      {/* <Canvas>
        <Suspense fallback= {null}>
          <pointLight position={[5, 5, 5]} />
          <Fiber sides={[1,1.2,6]} color={0x6674ef} />
        </Suspense>
        <OrbitControls enableZoom={false}/>
      </Canvas> */}
      </section>

      <Navbar />

      <section className={styles.Skills}>
      <Canvas>
        <Suspense fallback= {null}>
          <pointLight position={[5, 5, 5]} />
          <Skills />
        </Suspense>
        <OrbitControls enableZoom={false}/>
      </Canvas>
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