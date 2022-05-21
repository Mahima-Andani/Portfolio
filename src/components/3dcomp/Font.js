import React from 'react'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

function Font() {
    const font = new FontLoader().parse("myFont");

  return (
    <mesh>
        <TextGeometry 
            args={['test', {font, size:5, height: 1}]}
            attach='geometry'/>
        <meshStandardMaterial 
            attach='material' 
            color={'gold'}
        />
    </mesh>
  )
}

export default Font