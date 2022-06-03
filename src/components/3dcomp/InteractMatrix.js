import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const tempPlane = new THREE.Object3D();

//mouse controls
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
const cursor = {
  x: 0,
  y: 0
}
const mesh = {
  position: null
}


function PlaneMatrix( {m, n}){

  const { viewport } = useThree()
  //scene
  const material = new THREE.MeshPhongMaterial({ color: "#066255" })
  const PlaneGeometry = new THREE.PlaneGeometry(viewport.width/250, viewport.width/250)
  //mouse controls
  const matrixRef = useRef()
  mesh.position = matrixRef

  useFrame(({ clock }) => {
    let counter = 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        const id = counter++
        tempPlane.position.set(m / 2 - i, 0 , n / 2 - j)
        tempPlane.updateMatrix()
        matrixRef.current.setMatrixAt(id, tempPlane.matrix)
      }
    }
    matrixRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
    <instancedMesh ref={matrixRef} args={[PlaneGeometry, material, m * n]} />
    </>
  )
}

function Camera() {
  const camera = useRef()

  window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
  })

  useFrame(() => {
    if (camera.current && mesh.position.current) {
      // camera.current.position.x = Math.sin(cursor.x * Math.PI * 2) * 2
      camera.current.position.z = Math.cos(cursor.x * Math.PI * 2) * 2
      camera.current.position.y = cursor.y * 3

      camera.current.lookAt(mesh.position.current.position)
    }
  })

  return (
      <perspectiveCamera
        ref={camera}
        fov={75}
        aspect={sizes.width / sizes.height}
        near={0.1}
        far={100}
      >
        <PlaneMatrix m={100} n= {100}/>
      </perspectiveCamera>
  )
}

function InteractMatrix() {
  return (
    <Canvas>
      <Camera />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <ambientLight />
  </Canvas>
  )
}

export default InteractMatrix