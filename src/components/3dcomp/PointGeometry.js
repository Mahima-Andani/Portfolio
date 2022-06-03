import React from 'react'
import { useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
 
 function PointGeometry(props) {
    const { viewport } = useThree()
    const CustomTag = `${props.GeometryType}Geometry`
   return (
    <>
        <points
            scale={(viewport.width / 20)}
            position={[0,0,0]}
        >
            <CustomTag 
                attach='geometry' 
                args={props.args}
            />
            <pointsMaterial 
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
