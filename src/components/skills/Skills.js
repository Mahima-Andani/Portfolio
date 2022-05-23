import React, { Suspense } from 'react'
import ReactDOM from "react-dom"
import { Canvas, useFrame } from '@react-three/fiber'
import sectionstyles from './skills.module.css'
import { OrbitControls, Text } from "@react-three/drei"
import RingSphere from '../3dcomp/RingSphere'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab, faLanguage } from "@fortawesome/free-solid-svg-icons";

function Skills() {
    let k=0
    const regular = [
      "Java",
      "Data Structures",
      "Algorithms"
    ]
    const development = [
      "JavaScript",
      "React",
      "CSS",
      "HTML"
    ]
    const tools = [
      "Git",
      "GitHub"
      ]
    const alsoKnow = [
      "SCSS",
      "Hugo",
      "MySQL",
    ]
    const skillsList = [regular, development, tools, alsoKnow]

  return (
    <section className={sectionstyles.skill_section}>
      {/* <FontAwesomeIcon icon={faLanguage} /> */}
      {/* <div className={sectionstyles.skill_box}> */}
  <Canvas>
    <Suspense fallback= {null}>
      <pointLight position={[5, 5, 5]} />
      {skillsList.map((skills, i)=>
        skills.map((skill, j)=>
            <Text
            key={k++}
            scale={[5,5,5]} 
            color="black"
            anchorX="right" 
            anchorY="down" 
            position={[2.5*i, 1.2*j, Math.sin(i*0.15)]}
            >
              {skill}
            </Text>
        )
      )}
      </Suspense>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    </section>
  )
}

export default Skills