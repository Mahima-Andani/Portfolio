import { useFrame } from '@react-three/fiber';
import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'

function Icons() {
  const {iconref} = React.useRef()
  // const {iconref1} = React.useRef()
  // const {iconref2} = React.useRef()
  const [hovered, setHover] = React.useState(false);
  // useFrame(()=>{
  //   // iconref.current.rotation.x += 0.3
  // })
  return (
    <>
    <div
      onPointerOver={ (event)=> setHover(true)} 
      onPointerOut={(event)=> setHover(false)} 
    >
      <FaGithub 
      scale={hovered ? 1 : 1.5}
        color={hovered ? "orange" : "black"}
      />
    </div>
    
    </>
  )
}

export default Icons