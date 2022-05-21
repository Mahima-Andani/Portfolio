
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
// import Fiber from "./components/3dcomp/Fiber";
// import Box from "./components/3dcomp/Box";
// import Sphere from "./components/3dcomp/Sphere";
// import Rings from "./components/3dcomp/Rings";    
// import Flower from "./components/3dcomp/Flower";    
import RingSphere from "./components/3dcomp/RingSphere";    
// import Font from "./components/3dcomp/Font";    
import {OrbitControls} from '@react-three/drei'

function App() {
  return (
    <>
      <section className={styles.home}>
        
        <Canvas className={styles.canvas}>
          <Suspense fallback= {null}>
            {/* <Fiber sides={[2,3,18]} color={'red'}/> */}
            {/* <Box/> */}
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.1, 0.1, 0.6]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.2, 0.2, 0.7]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.3, 0.3, 0.8]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.4, 0.4, 0.9]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.5, 0.5, 1.0]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.6, 0.6, 1.1]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.7, 0.7, 1.2]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.8, 0.8, 1.3]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 0.9, 0.9, 1.4]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 1.0, 1.0, 1.5]}/>
            <RingSphere args={[0.1, 0.101, 9]} position={[ 1.1, 1.1, 1.6]}/>
            {/* <Sphere sides={[4,4,4]} color={'blue'}/> */}
          </Suspense>
          <ambientLight intensity = {0.5}/>
          <pointLight position={[0,0,5]} intensity = {0.5}/>
          <OrbitControls enableZoom={false}/>
        </Canvas>
        </section>
      {/*   
      <Canvas className={styles.canvas}>
        <Suspense fallback= {null}>
          <Flower/>
        </Suspense>
        <ambientLight intensity = {0.5}/>
        <pointLight position={[0,0,5]} intensity = {0.5}/>
        <OrbitControls/>
      </Canvas> 
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
      */}
      <About />
      <Navbar />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;