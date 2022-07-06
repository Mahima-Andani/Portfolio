import React from 'react'
import { GradientTexture, MeshReflectorMaterial, MeshWobbleMaterial } from '@react-three/drei';
// import {OrbitControls} from 'drei'
import EventControl from '../EventControl';
 
 function Fiber(props) {
   const ref = React.useRef()

   return (
    <>    
      <mesh 
        ref={ref}
        position={props.position}
        scale={props.scale}
      >
        <sphereGeometry attach='geometry' args={[1.5, 60, 60]}/>
        <meshStandardMaterial
          attach='material'color={'#fec04d'}
          // metalness={0.1}
          roughness={0.5}
          clearcoat={0.1}
        >
          {/* <GradientTexture
            stops={[0.1, 0.8, 0.2]} // As many stops as you want
            colors={['#f5ef63', '#ffe388', '#fec04d']} // Colors need to match the number of stops
          /> */}
        </meshStandardMaterial>
     </mesh>
     {/* <EventControl refProp={ref}/> */}
      {/* <mesh>
        <boxGeometry />
        <MeshWobbleMaterial factor={1} speed={1} />
      </mesh> */}
    </> 
  )
 }
 
 export default Fiber