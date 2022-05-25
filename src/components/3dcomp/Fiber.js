import React from 'react'
import { useFrame } from '@react-three/fiber';
import { GradientTexture, MeshWobbleMaterial } from '@react-three/drei';
// import {OrbitControls} from 'drei'
 
 function Fiber(props) {
   const meshref = React.useRef()
    useFrame(({clock}) => {
    // meshref.current.rotation.x = meshref.current.rotation.y = meshref.current.rotation.z = Math.sin(clock.getElapsedTime()) 
    // meshref.current.rotation.y = Math.sin(clock.getElapsedTime()) 
  })
   return (
    <>    
      <mesh ref={meshref} rotateZ={Math.PI/2}>
        <ringGeometry attach='geometry' args={props.sides} />
        <meshPhongMaterial attach='material' color={props.color}>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshPhongMaterial>
     </mesh>
      {/* <mesh>
        <boxGeometry />
        <MeshWobbleMaterial factor={1} speed={1} />
      </mesh> */}



    </> 
  )
 }
 
 export default Fiber