import React from 'react'
// import {OrbitControls} from 'drei'
 
 function Fiber(props) {
   return (
     <mesh>
       <ringGeometry attach='geometry' args={props.sides}/>
       <meshPhongMaterial attach='material' color={props.color}/>
     </mesh>
   )
 }
 
 export default Fiber