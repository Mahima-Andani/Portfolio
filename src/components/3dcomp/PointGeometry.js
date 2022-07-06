import React, { useRef } from 'react'
import { useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import EventControl from '../EventControl';

function PointGeometry(props) {

    const { viewport } = useThree()
    const ref = useRef()
    const CustomTag = `${props.GeometryType}Geometry`
   
    useFrame((clock)=>{
        ref.current.rotation.z += 0.005
      })
   return (
    <>
        <points
            ref={ref}
            scale={props.scale}
            position={props.position}
        >
            <CustomTag 
                attach='geometry' 
                args={props.args}
            />
            <pointsMaterial 
                doubleSided = {true}
                size={.1} 
                sizeAttenuation
                color={props.color}
                opacity={0.1} 
                attach='material' 
            />
        </points>
        {/* <EventControl refProp={ref} scrollAction={'y'}/> */}
    </>
  )
 }
 
 export default PointGeometry
