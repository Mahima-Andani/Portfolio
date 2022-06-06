import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei'

function Bubble(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  useFrame(() => {
    ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.3 : 0, hovered ? 0.5 : 0.01)
  })
  return (
    <mesh 
        onPointerOver={() => hover(true)} 
        onPointerOut={() => hover(false)} 
        scale={props.scale}
        position={props.position} 
    >
      <sphereGeometry 
        args={[(props.scale), 20, 20]}
      />
      <MeshDistortMaterial ref={ref} speed={5} transparent opacity={0.3}>
        <GradientTexture stops={[0, 0.8, 1]} colors={['#fdcffd', '#6d6cf9', '#9effd2']} size={100} />
      </MeshDistortMaterial>
    </mesh>
  )
}

export default Bubble