import React from 'react'
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
 
 function Flower(props) {
    const [hovered, setHover] = useState(false);
    const meshref = React.useRef()
    const meshref2 = React.useRef()
    useFrame((clock) => {
        // meshref.current.rotation.x = Math.sin(clock.getElapsedTime())
        meshref.current.rotation.y += 0.01
        meshref2.current.rotation.y -= 0.01
    })
   return (
    <>    
    
        <mesh ref={meshref} 
            onPointerOver={ (event)=> setHover(true)} 
            onPointerOut={(event)=> setHover(false)} 
        >
        <cylinderGeometry attach='geometry' 
            args={[2, 1, 0.1]}
        />
        <meshStandardMaterial 
            attach='material' 
            color={hovered ? "hotpink" : "red"}
            wireframe
        />
     </mesh>
     <mesh ref={meshref2} 
            onPointerOver={ (event)=> setHover(true)} 
            onPointerOut={(event)=> setHover(false)} 
        >
        <cylinderGeometry attach='geometry' 
            args={[2,1,0.1]}
        />
        <meshStandardMaterial 
            attach='material' 
            color={hovered ? "orange" : "red"}
            wireframe
        />
     </mesh>
     <OrbitControls/>
    </> 
  )
 }
 
 export default Flower