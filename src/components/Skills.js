// import {React, useRef, useState} from 'react'
// import { useThree, useFrame } from '@react-three/fiber'
// import { Text, Html } from "@react-three/drei";
// import Rings from '../components/3dcomp/Rings'
// import styles from '../assets/layout.module.css'
// import Icons from './Icons';
// import {FaGithub} from 'react-icons/fa'
// import {FaGitAlt} from 'react-icons/fa'
// import {FaReact} from 'react-icons/fa'
// import {FaHtml5} from 'react-icons/fa'
// import {FaCss3} from 'react-icons/fa'
// import {FaJava} from 'react-icons/fa'
// import {FaCode} from 'react-icons/fa'
// import {SiVisualstudiocode} from 'react-icons/si'
// import {BiCodeCurly} from 'react-icons/bi'
// import {IoLogoJavascript} from 'react-icons/io'
// import {GrMysql} from 'react-icons/gr'

// function Skills() {
//     const {viewport} = useThree()
//     const iconref = useRef()

//     useFrame(()=>{
//         iconref.current.rotation.x += 0.1
//         // iconref.current.rotation.y += 0.01
//     })
//   return (
//     <>
//     <mesh ref={iconref} >
//         {/* <Text 
//         scale={(viewport.width / 5)} 
//         color={"black"}
//         position={[1,1,1]}
//         >
//             Skills
//         </Text> */}
//         <Html scale={(viewport.width / 5)} position={[1,1,5]}>
//             <FaGithub  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[2,2,4]}>
//             <FaGitAlt  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[3,3,3]}>
//             <FaReact  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[4,4,2]}>
//             <FaCode  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[5,5,1]}>
//             <FaHtml5  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[6,6,0]}>
//             <FaCss3  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[7,7,-1]}>
//             <FaJava  />


//         </Html>
//         <Html scale={(viewport.width / 5)} position={[8,8,-2]}>
//             <IoLogoJavascript  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[9,9,-3]}>
//             <GrMysql  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[10,10,-4]}>
//             <SiVisualstudiocode  />
//         </Html>
//         <Html scale={(viewport.width / 5)} position={[11,11,-5]}>
//             <BiCodeCurly  />
//         </Html>
//     </mesh>

//         {/* <mesh scale={(viewport.width + viewport.height)/15}>
//             <Rings 
//                 args={[1, 1.001, 8]}
//                 z={0.1}
//             />
//                 <Rings 
//                     args={[1.5, 1.501, 8]}
//                     z={0.3}
//                 />
//             <Rings 
//                 args={[2, 2.001, 8]}
//                 z={0.5}
//             />
//         </mesh> */}
//     </>
//   )
// }

// export default Skills

