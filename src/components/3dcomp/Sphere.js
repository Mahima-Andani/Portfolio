import React from 'react'
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';
// import {OrbitControls} from 'drei'
 
 function Fiber(props) {
     const [hovered, setHover] = useState(false);
    const meshref = React.useRef()
    useFrame((clock) => {
        // meshref.current.rotation.x = Math.sin(clock.getElapsedTime())
        meshref.current.rotation.y += 0.01
    })
   return (
    <>    
        <mesh ref={meshref} 
            onPointerOver={ (event)=> setHover(true)} 
            onPointerOut={(event)=> setHover(false)} 
        >
        <sphereGeometry attach='geometry' 
            args={[1, 20, 20]}
        />
        <meshStandardMaterial 
            attach='material' 
            color={hovered ? "orange" : "white"}
            scale ={hovered? [2,1,1]:[1,2,2]}
            wireframe
        />
     </mesh>
    </> 
  )
 }
 
 export default Fiber