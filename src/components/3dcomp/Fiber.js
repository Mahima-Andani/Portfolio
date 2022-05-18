import React from 'react'
import { useFrame } from '@react-three/fiber';
// import {OrbitControls} from 'drei'
 
 function Fiber(props) {
   const meshref = React.useRef()
    useFrame(({clock}) => {
    meshref.current.rotation.x = Math.sin(clock.getElapsedTime()) 
    // meshref.current.rotation.y = Math.sin(clock.getElapsedTime()) 
  })
   return (
    <>    
      <mesh ref={meshref}>
      <ringGeometry attach='geometry' args={props.sides}/>
      <meshPhongMaterial attach='material' color={props.color}/>
     </mesh>
    </> 
  )
 }
 
 export default Fiber