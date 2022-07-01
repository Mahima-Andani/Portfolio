import React, { Suspense } from 'react'
import sectionstyles from './About.module.css'
import { Canvas } from '@react-three/fiber'
// import {OrbitControls} from '@react-three/drei'
import InteractMatrix from '../3dcomp/InteractMatrix'
import PointGeometry from '../3dcomp/PointGeometry'

function About() {

  return (
    <>
      <Canvas>
        <Suspense fallback= {null}>
          <perspectiveCamera
            // aspect={window.innerWidth / window.innerHeight}
            fov={75}
            position={[0,1,2]}>
          <pointLight position={[5, 5, 5]} />

          <PointGeometry GeometryType={"Sphere"} args={[3,50,50]} color={"#6d6cf9"}/>

        </perspectiveCamera>
        </Suspense>
      </Canvas>
      {/* <InteractMatrix className={sectionstyles.matrix} m={70} n= {50}/> */}
      <div className={sectionstyles.AboutContent}>
        I build sites on the web, for you to visit and get amazed!
      </div>
    </>
  )
}

export default About