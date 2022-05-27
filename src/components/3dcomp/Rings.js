import React from 'react'
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
 
 function Fiber(props) {
    const [hovered, setHover] = useState(false);
    const meshref = React.useRef()
    const meshref2 = React.useRef()
    useFrame((clock) => {
        // meshref.current.rotation.x = Math.sin(clock.getElapsedTime())
        meshref.current.rotation.z += 0.01
        meshref2.current.rotation.z -= 0.01
    })
   return (
    <>
        <mesh ref={meshref} 
            onPointerOver={ (event)=> setHover(true)} 
            onPointerOut={(event)=> setHover(false)} 
        
            position={[0, 0, props.z]}
        >
        <ringGeometry attach='geometry' 
            args={props.args}
        />
        <meshStandardMaterial 
            attach='material' 
            color={hovered ? "hotpink" : "red"}
            wireframe
            opacity={0.1} transparent
        />
     </mesh>
     <mesh ref={meshref2} 
            onPointerOver={ (event)=> setHover(true)} 
            onPointerOut={(event)=> setHover(false)} 
            position={[0, 0, props.z]}
        >
        <ringGeometry attach='geometry' 
            args={props.args}
        />
        <meshPhongMaterial 
            attach='material' 
            color={hovered ? "orange" : "red"}
            wireframe
            opacity={0.1} transparent
        />
     </mesh>
    </> 
  )
 }
 
 export default Fiber