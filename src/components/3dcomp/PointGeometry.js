import React, { useRef } from 'react'
import { useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const cursor = {
    x: 0,
    y: 0
}

 function PointGeometry(props) {
    const { viewport } = useThree()
    const ref = useRef()
    const CustomTag = `${props.GeometryType}Geometry`

    window.addEventListener("mousemove", (event) => {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = event.clientY / sizes.height -0.5
    })

    useFrame(() => {
        ref.current.position.z = Math.sin(cursor.x * Math.PI * 2)
        ref.current.position.y = cursor.y * -5
    })

   return (
    <>
        <points
            ref={ref}
            scale={(viewport.width / 20)}
            position={[0,0,0]}
        >
            <CustomTag 
                attach='geometry' 
                args={props.args}
            />
            <pointsMaterial 
                doubleSided = {true}
                size={0.02} sizeAttenuation
                color={props.color}
                opacity={0.1} 
                attach='material' 
            />
        </points>
    </> 
  )
 }
 
 export default PointGeometry
