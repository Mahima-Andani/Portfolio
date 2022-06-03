import React from 'react'
import { useFrame } from '@react-three/fiber';
import { GradientTexture, MeshReflectorMaterial, MeshWobbleMaterial } from '@react-three/drei';

// import {OrbitControls} from 'drei'
 
 function Fiber(props) {
   const torusref = React.useRef()
    useFrame(({clock}) => {
    // meshref.current.rotation.x = meshref.current.rotation.y = meshref.current.rotation.z = Math.sin(clock.getElapsedTime()) 
    // meshref.current.rotation.y = Math.sin(clock.getElapsedTime()) 
  })
   return (
    <>    
      <mesh ref={torusref} position={props.position}>
        <circleGeometry attach='geometry' args={[(props.scale), 60]} />
        <MeshReflectorMaterial 
          attach='material'
          color={'#d6c5d0'}
        >
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['#066255', '#feddd4']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </MeshReflectorMaterial>
     </mesh>
      {/* <mesh>
        <boxGeometry />
        <MeshWobbleMaterial factor={1} speed={1} />
      </mesh> */}



    </> 
  )
 }
 
 export default Fiber