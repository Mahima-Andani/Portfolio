import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useScroll, Text } from "@react-three/drei"

import CV from './CV'
import sectionstyles from './About.module.css'
import Sphere from '../3dcomp/Sphere'
import Fiber from '../3dcomp/Fiber'
import Bubble from '../3dcomp/Bubble'

// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'

// import { Button } from 'antd';
// import { Typography } from 'antd';
// const { Title } = Typography;

function Home() {
  const greeting = useRef()

  const { viewport } = useThree()
  const scroll = useScroll()
  let [active, setActive] = useState(false)
  return (
    <>
    <Fiber 
      position={[0,0,-12]}
      scale={((viewport.width+viewport.height )/ 3)}
    />
    <Bubble 
      position={[-4,3.5,-2]} 
      scale={(viewport.width / 15)}
    />
    <Bubble 
      position={[-6,1.5,-3]} 
      scale={(viewport.height / 10)}
    />
    <Bubble 
      position={[7.5,-4,-5]} 
      scale={(viewport.height / 5)}
    />
    <Text ref={greeting} scale={((viewport.width+viewport.height ) / 6)} color={"black"}>
      Hi, I'm Mahima Andani :)
    </Text>
    
    {/* <fog attach="fog" args={["f9f2ef", 4, 15]} /> */}

    {/* <Fiber position={[5,5,15]} scale={(viewport.width / 5)}/>
    <Fiber position={[7,7,16]} scale={(viewport.width / 7)}/>
    <Fiber position={[9,9,17]} scale={(viewport.width / 9)}/>
    <Fiber position={[7,7,18]} scale={(viewport.width / 11)}/> */}
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