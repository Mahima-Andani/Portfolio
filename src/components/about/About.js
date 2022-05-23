import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Text } from "@react-three/drei"

import CV from './CV'
import sectionstyles from './About.module.css'
import Sphere from '../3dcomp/Sphere'

// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'

// import { Button } from 'antd';
// import { Typography } from 'antd';
// const { Title } = Typography;

function About() {
  const cwref = useRef()
  const acwref = useRef()
  const { viewport } = useThree()
  let [active, setActive] = useState(false)
  useFrame((clock) => {
    cwref.current.rotation.z += 0.01
    // acwref.current.rotation.z -= 0.01
    cwref.current.rotation.x += 0.01
    // acwref.current.rotation.x -= 0.01
})

  return (
    <>
    <mesh ref={cwref}>
    <Sphere
      position={[1,1,1]}
      color={0xff0000}
      wireframe={true}
      scale={(viewport.width / 5)}
    />
    </mesh>

    <Text scale={(viewport.width / 5)} color={"black"}>
      Hi, I'm Mahima Andani :)
    </Text>

      {/* <CV/> */}
        {/* <Title>Hey! <br/> I'm Mahima Andani</Title> */}
        {/* <Button type="secondary" className='button'>Say Hi</Button> */}
        {/* <iframe src='https://leetcode.com/MahimaAndani/' width='50%'></iframe> */}
    </>
  )
}

export default About