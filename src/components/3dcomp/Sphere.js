import React from 'react'
import { useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
// import {OrbitControls} from 'drei'
 
 function Fiber(props) {
  const { viewport } = useThree()

     const [hovered, setHover] = useState(false);
    const meshref = React.useRef()
    // useFrame(() => {
    //     meshref.current.rotation.y += 0.01
    // })
   return (
    <>    
        <mesh ref={meshref} 
            scale={props.scale}
            position={props.position}
            onPointerOver={ (event)=> setHover(true)} 
            onPointerOut={(event)=> setHover(false)} 
        >
        <sphereGeometry 
            attach='geometry' 
            args={[(props.scale/10), 20, 20]}
            // args={hovered ? [1, 20, 20] :[1, 10, 10]}
        />
        <meshPhongMaterial 
            color={props.color}
            opacity={0.1} transparent
            attach='material' 
            // color={hovered ? "orange" : "white"}
            wireframe={props.wireframe}
        />
     </mesh>
    </> 
  )
 }
 
 export default Fiber
//  <pointsMaterial 
//  size={0.02} sizeAttenuation
//  color="#066255"
//  opacity={0.1} 
//  attach='material' 
//  // color={hovered ? "orange" : "white"}
//  // wireframe={props.wireframe}
// />