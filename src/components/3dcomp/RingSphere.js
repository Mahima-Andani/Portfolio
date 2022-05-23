import React from 'react'
import { mesh } from 'three'

function RingSphere(props) {
  return (
    <mesh 
      position={props.position}>

      <ringGeometry 
        attach='geometry' 
        args={props.args}
      />
      
      <meshStandardMaterial 
        attach='material'
        color={props.color} 
        wireframe
      />

    </mesh>
  )
}

export default RingSphere