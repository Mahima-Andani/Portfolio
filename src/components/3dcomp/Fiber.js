import React from 'react'
import { useFrame } from '@react-three/fiber';
import { GradientTexture, MeshReflectorMaterial, MeshWobbleMaterial } from '@react-three/drei';

// import {OrbitControls} from 'drei'
 
 function Fiber(props) {
   const ref = React.useRef()

   return (
    <>    
      <mesh ref={ref} position={props.position}>
        <sphereGeometry attach='geometry' args={[(props.scale), 60, 60]} />
        <MeshReflectorMaterial 
          attach='material'
        >
          <GradientTexture
            stops={[0.1, 0.8, 0.2]} // As many stops as you want
            colors={['#fdcffd', '#6d6cf9', '#9effd2']} // Colors need to match the number of stops
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