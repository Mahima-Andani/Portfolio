import React, { useRef } from 'react'
import { useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import EventControl from '../EventControl';

function PointGeometry(props) {

    const { viewport } = useThree()
    const ref = useRef()
    const CustomTag = `${props.GeometryType}Geometry`

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
        <EventControl refProp={ref} scrollAction={'y'}/>
    </>
  )
 }
 
 export default PointGeometry
