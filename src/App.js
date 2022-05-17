
import React, { Suspense } from 'react';
import './App.css';
import styles from './assets/layout.module.css';
import { Button } from 'antd';
import About from "./components/about/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";
// import Threed from "./components/3dcomp/Threed";
import { Canvas, useFrame } from '@react-three/fiber';
import Fiber from "./components/3dcomp/Fiber";
// import {OrbitControls} from 'drei'

function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback= {null}>
          <Fiber sides={[2,3,18]} color={'red'}/>
          <Fiber sides={[1,2.5,18]} color={'orange'}/>
          <Fiber sides={[1,2,18]} color={'yellow'}/>
          <Fiber sides={[1,1.5,18]} color={'green'}/>
        </Suspense>
        {/* <OrbitControls/> */}
        <ambientLight intensity = {0.5}/>
      </Canvas>

      <About />
      <Navbar />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;