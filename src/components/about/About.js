import React, { Suspense, useRef } from 'react'
import sectionstyles from './About.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import InteractMatrix from '../3dcomp/InteractMatrix'
import PointGeometry from '../3dcomp/PointGeometry'
import Clouds from '../3dcomp/Clouds'
import EventControl from '../EventControl'
import Fiber from '../3dcomp/Fiber'
import {OrbitControls, Text } from '@react-three/drei'


function About() {
  const left = useRef()
  const right = useRef()


  return (
    <>
      <Canvas orthographic camera={{ zoom: 90, position: [0, 0, 100] }}>
        <Suspense fallback= {null}>
          <ambientLight position={[0, 4, 10]} intensity={0.5}/>
          <directionalLight position={[0, 5, 1]} color={'#ccd0fc'} intensity={2}/>
          <directionalLight position={[0, -5, 15]} color={'#fdcffd'} intensity={1}/>


{/* Clouds */}
          {/* <mesh  ref={right}>
             <mesh position={[4,-1,1]}>
              <Clouds/>
            </mesh>
            <mesh position={[2,1.8,0]}>
              <Clouds/>
            </mesh>
          </mesh>

          <mesh  ref={left}>
            <mesh position={[-6,3,0]}>
              <Clouds/>
            </mesh>
          </mesh> */}

{/* sun */}
          {/* <group>

          <Fiber position={[-4,0,2]} scale={1}/>
          
          <PointGeometry 
            GeometryType={"Circle"} 
            args={[2.3, 15]} 
            color={"#fec04d"} 
            position={[-4,0,2]}
            scale={1}
          />
          <mesh position={[-4.6,0.5,3.4]}>
            <circleGeometry args={[.25, 50]}/>
            <meshStandardMaterial color={"#000000"}/>
          </mesh>
          <mesh position={[-4.58,0.45,3.41]}>
            <circleGeometry args={[.15, 50]}/>
            <meshStandardMaterial color={"#ffffff"}/>
          </mesh>
          <mesh position={[-3.4,0.5,3.4]}>
            <circleGeometry args={[.25, 50]}/>
            <meshStandardMaterial color={"#000000"}/>
          </mesh>
          <mesh position={[-3.38,0.45,3.41]}>
            <circleGeometry args={[.15, 50]}/>
            <meshStandardMaterial color={"#ffffff"}/>
          </mesh>

          <mesh position={[-4,-.45,3.38]}>
            <ringGeometry args={[.3, .32, 50, 5, 3.16, 3.16]}/>
            <meshStandardMaterial color={"#000000"}/>
          </mesh>
          <mesh position={[-4,-.2,3.4]}>
            <ringGeometry args={[.4, .42, 50, 5, 3.9, 1.65]}/>
            <meshStandardMaterial color={"#000000"}/>
          </mesh>

          </group>

            <OrbitControls enableZoom={false}/>
          <EventControl leftProp={left} rightProp={right}/> */}
        </Suspense>
      </Canvas>
      {/* <InteractMatrix className={sectionstyles.matrix} m={70} n= {50}/> */}
{/* <div className={sectionstyles.AboutContent}>
        <h1>I'm </h1>
      </div> */}
    </>
  )
}

export default About