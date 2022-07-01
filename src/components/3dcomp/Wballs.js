import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei'
import EventControl from '../EventControl';

function Wballs(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.3 : 0, hovered ? 0.5 : 0.01)
  })
  return (
    <>
    <mesh ref={ref}
        onPointerOver={() => hover(true)} 
        onPointerOut={() => hover(false)} 
        scale={props.scale}
        position={props.position} 
    >
      <sphereGeometry 
        args={[.5, 20, 20]}
      />
      <MeshDistortMaterial ref={ref} speed={3} color={"white"}/>
    </mesh>
    {/* <EventControl refProp={ref}/> */}
    </>
  )
}

export default Wballs