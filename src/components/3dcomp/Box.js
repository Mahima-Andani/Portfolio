import React from 'react'
import { useFrame } from '@react-three/fiber';

function Box(props) {
    const meshref = React.useRef()
    useFrame(({clock}) => {
    meshref.current.rotation.x = Math.sin(clock.getElapsedTime()) 
  })

  return (
    <group>
    <mesh ref={meshref}>
        <boxGeometry attach='geometry' args={[1, 2, 3]} position={[20, 2, 20]}/>
        <meshPhongMaterial attach='material' color='grey'/>
    </mesh>
    </group>
  )
}

export default Box