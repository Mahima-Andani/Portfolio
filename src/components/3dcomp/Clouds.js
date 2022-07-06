import React from 'react'
import Wballs from './Wballs'

function Clouds() {
  return (
    <>
    <group>
    <Wballs 
      // position={[-4,3.5,-2]} 
      position={[-.5,-.4,0]} 
    />
    <Wballs 
      // position={[-6,1.5,-3]} 
      position={[-1,0,0]} 
    />
    <Wballs 
      // position={[7.5,-4,-5]} 
      position={[-1.2,-.5,0]} 
    />
    <Wballs 
      position={[-2,-.4,0]} 
    />
    <Wballs 
      position={[-1.8,.05,0]} 
    />
    </group>
    <group>
    <Wballs 
      // position={[-4,3.5,-2]} 
      position={[.5,-.4,0]} 
    />
    <Wballs 
      // position={[-6,1.5,-3]} 
      position={[1,0,0]} 
    />
    <Wballs 
      // position={[7.5,-4,-5]} 
      position={[1.2,-.5,0]} 
    />
    <Wballs 
      position={[2,-.4,0]} 
    />
    <Wballs 
      position={[1.8,.05,0]} 
    />
    </group>

    </>
  )
}

export default Clouds