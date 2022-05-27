import React from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Rings from '../components/3dcomp/Rings'
import styles from '../assets/layout.module.css'

function Skills() {
    const {viewport} = useThree()
  return (
    <>

        <mesh scale={(viewport.width + viewport.height)/10}>
            <Rings 
                args={[1, 1.001, 8]}
                z={0.1}
            />
                <Rings 
                    args={[1.5, 1.501, 8]}
                    z={0.3}
                />
            <Rings 
                args={[2, 2.001, 8]}
                z={0.5}
            />
        </mesh>
    </>
  )
}

export default Skills