import React, { Suspense } from 'react'
import ReactDOM from "react-dom"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import sectionstyles from './skills.module.css'
import { GradientTexture, OrbitControls, RoundedBox, Text } from "@react-three/drei"

// import Tiles from '../3dcomp/Plane'
import Plane from '../3dcomp/Plane'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab, faLanguage } from "@fortawesome/free-solid-svg-icons";

function Skills({i,j}) {

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
    const { viewport } = useThree()
    let pos = viewport

    useFrame(()=>{
      // radius += 0.05
    })
  return (
    <>
    
      {skillsList.map((skills, x)=>
        skills.map((skill, y)=>
        <mesh
        position={[i / 2 - x, j / 2 - y, 0]}
        >

          
        {/* <planeGeometry/>
        <meshPhongMaterial attach='material'>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['grey', 'hotpink']} // Colors need to match the number of stops
          />
        </meshPhongMaterial> */}
      
            <Text
            key={skill}
            color="black"
            anchorX="right" 
            anchorY="down" 
            scale={(viewport.width / 5)}
            // position={[ Math.sin(i*0.5),  Math.sin(j*0.5), Math.sin(i*0.15)]}
            >
              {skill}
            </Text>
            </mesh>
        )
        )}
        {/* <FontAwesomeIcon icon={faLanguage} /> */}
        {/* <div className={sectionstyles.skill_box}> */}
    </>
  )
}

export default Skills