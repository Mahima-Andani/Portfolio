import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text } from "@react-three/drei"

import RingSphere from './3dcomp/RingSphere'

function Projects() {
  const cwref = useRef()
  const acwref = useRef()
  const { viewport } = useThree()
  let [active, setActive] = useState(false)
  useFrame((clock) => {
    // cwref.current.rotation.z += 0.01
    acwref.current.rotation.z -= 0.01
    // cwref.current.rotation.x += 0.01
    // acwref.current.rotation.x -= 0.01
})
  return (
    <>
      {/* <mesh ref={cwref} scale={(viewport.width)/5}
        onPointerOver={ (event)=> setActive(true)} 
        onPointerOut={(event)=> setActive(false)} 
      >
        <RingSphere 
          position={[1,0,-0.2]}
          args={[0.7, 0.725 ,90]} 
          scale={(viewport.width / 5)}
          color={active? "black" : "grey"}
        />
        <RingSphere 
          position={[1,0,-0.3]}
          args={[0.9, 0.925 ,90]} 
          scale={(viewport.width / 5)}
          color={active? "black" : "grey"}
        />
      </mesh> */}

      <mesh ref={acwref} scale={(viewport.width)/5}
        onPointerOver={ (event)=> setActive(true)} 
        onPointerOut={(event)=> setActive(false)} 
      >
        <RingSphere 
          position={[0,0,-0.2]}
          args={[0.7, 0.725 ,90]}
          scale={(viewport.width / 5)}
          color={active? "black" : "grey"}
        />
        <RingSphere 
          position={[0,0,-0.3]}
          args={[0.9, 0.925 ,90]} 
          scale={(viewport.width / 5)}
          color={active? "black" : "grey"}
        />
      </mesh>
    </>
  )
}

export default Projects