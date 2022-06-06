import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useScroll, Text } from "@react-three/drei"

import CV from './CV'
import sectionstyles from './About.module.css'
import Sphere from '../3dcomp/Sphere'
import Fiber from '../3dcomp/Fiber'

// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'

// import { Button } from 'antd';
// import { Typography } from 'antd';
// const { Title } = Typography;

function Home() {
  const cwref = useRef()
  const dwref = useRef()
  const ewref = useRef()
  const greeting = useRef()

  const { viewport } = useThree()
  const scroll = useScroll()
  let [active, setActive] = useState(false)

  useFrame((clock) => {
    // ewref.current.position.z = scroll.offset * 12
    ewref.current.rotation.z += 0.03
    cwref.current.rotation.x += 0.03
    dwref.current.rotation.y += 0.03
    // greeting.current.rotation.x = Math.sin(clock.getElapsedTime())
  
    
  })

  return (
    <>
    <mesh ref={cwref}>
    <Sphere
      position={[1,1,1]}
      color={0x6d6cf9}
      wireframe={true}
      scale={(viewport.width / 15)}
    />
    </mesh>
    <mesh ref={dwref}>
    <Sphere
      position={[1,1,1]}
      color={0x6d6cf9}
      wireframe={true}
      scale={(viewport.width / 15)}
    />
    </mesh>
    <mesh ref={ewref}>
    <Sphere
      position={[1,1,1]}
      color={0x6d6cf9}
      wireframe={true}
      scale={(viewport.width / 15)}
    />
    </mesh>

    <Text ref={greeting} scale={(viewport.width / 5)} color={"black"}>
      Hi, I'm Mahima Andani :)
    </Text>

    {/* <fog attach="fog" args={["f9f2ef", 5, 15]} /> */}

    <Fiber position={[5,5,15]} scale={(viewport.width / 5)}/>
    <Fiber position={[7,7,16]} scale={(viewport.width / 7)}/>
    <Fiber position={[9,9,17]} scale={(viewport.width / 9)}/>
    <Fiber position={[7,7,18]} scale={(viewport.width / 11)}/>
      {/* <CV/> */}
        {/* <Title>Hey! <br/> I'm Mahima Andani</Title> */}
        {/* <Button type="secondary" className='button'>Say Hi</Button> */}
        {/* <iframe src='https://leetcode.com/MahimaAndani/' width='50%'></iframe> */}
    

        {/* <OrbitControls 
          minDistance={-1}
          maxDistance={25}
          // enableZoom={(OrbitControls.propTypes.getDistance <= OrbitControls.propTypes.maxDistance)? false: true} 
        /> */}
    </>
  )
}

export default Home