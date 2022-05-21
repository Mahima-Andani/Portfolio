import React from 'react'
import { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';
// import {OrbitControls} from 'drei'
 
 function Fiber(props) {
     const [hovered, setHover] = useState(false);
    const meshref = React.useRef()
    useFrame(() => {
        meshref.current.rotation.y += 0.01
    })
   return (
    <>    
        <mesh ref={meshref} 
            onPointerOver={ (event)=> setHover(true)} 
            onPointerOut={(event)=> setHover(false)} 
        >
        <sphereGeometry 
            attach='geometry' 
            args={hovered ? [1, 20, 20] :[1, 10, 10]}
        />
        <meshStandardMaterial 
            attach='material' 
            // color={hovered ? "orange" : "white"}
            wireframe
        />
     </mesh>
    </> 
  )
 }
 
 export default Fiber