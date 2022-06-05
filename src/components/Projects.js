import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

function Projects() {
  const ref = useRef()
  let [active, setActive] = useState(false)

  const { viewport } = useThree()
  useFrame((clock) => {

  })

  return (
    <>
      
    </>
  )
}

export default Projects