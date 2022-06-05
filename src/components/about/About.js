import React, { Suspense } from 'react'
import sectionstyles from './About.module.css'
import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import InteractMatrix from '../3dcomp/InteractMatrix'

function About() {

  return (
    <>
      <InteractMatrix className={sectionstyles.matrix} m={70} n= {50}/>
      <div className={sectionstyles.AboutContent}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </div>
    </>
  )
}

export default About