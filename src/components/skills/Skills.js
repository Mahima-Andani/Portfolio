// import React, { Suspense } from 'react'
// import ReactDOM from "react-dom"
// import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import sectionstyles from './skills.module.css'
// import { GradientTexture, OrbitControls, RoundedBox, Text } from "@react-three/drei"

// // import Tiles from '../3dcomp/Plane'
// import Plane from '../3dcomp/Plane'

// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { fab, faLanguage } from "@fortawesome/free-solid-svg-icons";

// function Skills({i,j}) {

//     const regular = [
//       "Java",
//       "Data Structures",
//       "Algorithms"
//     ]
//     const development = [
//       "JavaScript",
//       "React",
//       "CSS",
//       "HTML"
//     ]
//     const tools = [
//       "Git",
//       "GitHub"
//       ]
//     const alsoKnow = [
//       "SCSS",
//       "Hugo",
//       "MySQL",
//     ]
//     const skillsList = [regular, development, tools, alsoKnow]
//     const { viewport } = useThree()
//     let pos = viewport

//     useFrame(()=>{
//       // radius += 0.05
//     })
//   return (
//     <>
    
//       {skillsList.map((skills, x)=>
//         skills.map((skill, y)=>
//         <mesh
//         position={[i / 2 - x, j / 2 - y, 0]}
//         >

          
//         {/* <planeGeometry/>
//         <meshPhongMaterial attach='material'>
//           <GradientTexture
//             stops={[0, 1]} // As many stops as you want
//             colors={['grey', 'hotpink']} // Colors need to match the number of stops
//           />
//         </meshPhongMaterial> */}
      
//             <Text
//             key={skill}
//             color="black"
//             anchorX="right" 
//             anchorY="down" 
//             scale={(viewport.width / 5)}
//             // position={[ Math.sin(i*0.5),  Math.sin(j*0.5), Math.sin(i*0.15)]}
//             >
//               {skill}
//             </Text>
//             </mesh>
//         )
//         )}
//         {/* <FontAwesomeIcon icon={faLanguage} /> */}
//         {/* <div className={sectionstyles.skill_box}> */}
//     </>
//   )
// }

// export default Skills

import React, { Suspense } from 'react'
import sectionstyles from './skills.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TitleComponent from '../TitleComponent'
import List from './List'
import PointGeometry from '../3dcomp/PointGeometry'

import {FaReact} from 'react-icons/fa'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {GrMysql} from 'react-icons/gr'
import {SiLeetcode} from 'react-icons/si'

function Skills() {
  return (
    <>
      <TitleComponent title={"always interested in.."}/>
      <div className={sectionstyles.container}>
        <div>
        <Canvas>
          <Suspense fallback= {null}>
            <perspectiveCamera
            // aspect={window.innerWidth / window.innerHeight}
            fov={75}
            position={[0,1,2]}>
            <pointLight position={[5, 5, 5]} />

            <PointGeometry GeometryType={"Sphere"} args={[5,50,32]} color={"#f2d6c9"}/>

            </perspectiveCamera>
          </Suspense>
          <OrbitControls enableZoom={false}/>
        </Canvas>
        </div>

        <div>
          <div className={sectionstyles.listBox}>
            <List skill={"Java"}/>
            <FaJava className={sectionstyles.icon}/>
          </div>
          <div className={sectionstyles.listBox}>
            <List skill={"Data Structures and Algorithms"}/>
            <SiLeetcode className={sectionstyles.icon}/>
          </div>
          <div className={sectionstyles.listBox}>
            <List skill={"HTML and CSS"}/>
            <FaHtml5 className={sectionstyles.icon}/>
            <FaCss3 className={sectionstyles.icon}/>
          </div>
          <div className={sectionstyles.listBox}>
            <List skill={"Javascript"}/>
            <IoLogoJavascript className={sectionstyles.icon}/>
          </div>
          <div className={sectionstyles.listBox}>
            <List skill={"ReactJs"}/>
            <FaReact className={sectionstyles.icon}/>
          </div>
          <div className={sectionstyles.listBox}>
            <List skill={"MySQL"}/>
            <GrMysql className={sectionstyles.icon}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills