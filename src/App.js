
import React, { Suspense } from 'react';
import './App.css';
import styles from './assets/layout.module.css';
import { Button } from 'antd';
import About from "./components/about/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";
import { Canvas, useFrame } from '@react-three/fiber';
// import {Threed} from "./components/3dcomp/Threed";
import Fiber from "./components/3dcomp/Fiber";
import Box from "./components/3dcomp/Box";
import Sphere from "./components/3dcomp/Sphere";
import Rings from "./components/3dcomp/Rings";
// import {OrbitControls} from 'drei'

function App() {
  return (
    <>
      <section className={styles.home}>
        <About />
        <Canvas className={styles.canvas}>
          <Suspense fallback= {null}>
            {/* <Fiber sides={[2,3,18]} color={'red'}/> */}
            {/* <Box/> */}
            <Sphere sides={[4,4,4]} color={'blue'}/>
          </Suspense>
          <ambientLight intensity = {0.5}/>
          <pointLight position={[0,0,5]} intensity = {0.5}/>
        </Canvas>
      </section>
      <Canvas className={styles.canvas}>
        <Suspense>
          <Rings/>
          <ambientLight intensity = {0.5}/>
          <pointLight position={[0,0,5]} intensity = {2.5}/>
        </Suspense>
      </Canvas>
      <Canvas className={styles.canvas}>
        <Suspense fallback= {null}>
          <Fiber sides={[2,3,18]} color={'red'}/>
          <Fiber sides={[1,2.5,18]} color={'orange'}/>
          <Fiber sides={[1,2,18]} color={'yellow'}/>
          <Fiber sides={[1,1.5,18]} color={'green'}/>
          </Suspense>
        <ambientLight intensity = {2.5}/>
      </Canvas>
      <Navbar />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;