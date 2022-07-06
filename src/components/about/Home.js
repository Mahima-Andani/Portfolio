import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useScroll, Text } from "@react-three/drei"

import CV from './CV'
import sectionstyles from './About.module.css'
import Clouds from '../3dcomp/Clouds'
import Fiber from '../3dcomp/Fiber'
import PointGeometry from '../3dcomp/PointGeometry'
import EventControl from '../EventControl'

// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import { faAtom } from '@fortawesome/free-solid-svg-icons'

// import { Button } from 'antd';
// import { Typography } from 'antd';
// const { Title } = Typography;

function Home() {
  const greeting = useRef()
  const left = useRef()
  const right = useRef()

  const { viewport } = useThree()
  const scroll = useScroll()
  let [active, setActive] = useState(false)

  useFrame(()=>{
    // greeting.current.position.z += 0.01
  })
  return (
    <>
     <mesh>
      <torusGeometry args={[.5, .2, 100, 100, 3.14159265359]} />
      <meshPhongMaterial color={"#6fdcbf"} />
    </mesh>
    <mesh>
      <torusGeometry args={[1, .2, 100, 100, 3.14159265359]} />
      <meshPhongMaterial color={"#ae8fdb"} />
    </mesh>
    <mesh>
      <torusGeometry args={[1.5, .2, 100, 100, 3.14159265359]} />
      <meshPhongMaterial color={"#FF9AA2"} />
    </mesh>
    <mesh  >

      <Text 
        ref={greeting}
        scale={((viewport.width+viewport.height ) / 6)} 
        position={[0,-1.3,2]}
        color={"black"}
      >
        Hi, I'm Mahima Andani :)
      </Text>
    </mesh>

    <Clouds/>

    {/*More Clouds */}
    <mesh  ref={right}>
        {/* <mesh position={[4,-1,1]}>
        <Clouds/>
      </mesh> */}
      <mesh position={[7,1.8,0]}>
        <Clouds/>
      </mesh>
    </mesh>

    <mesh  ref={left}>
      <mesh position={[-7,3,0]}>
        <Clouds/>
      </mesh>
      <mesh position={[-5,-2,0]}>
        <Clouds/>
      </mesh>
    </mesh>

    <EventControl leftProp={left} rightProp={right}/>

    {/* sun */}
    <group position={[5,-.5,1]} scale={.8}>

      <Fiber position={[-4,0,0]} scale={.4}/>

      <PointGeometry 
        GeometryType={"Circle"} 
        args={[2.3, 15]} 
        color={"#fec04d"} 
        position={[-4,0,0]}
        scale={.4}
      />
</group>
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