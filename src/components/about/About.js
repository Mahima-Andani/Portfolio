import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei'
import InteractMatrix from '../3dcomp/InteractMatrix';



function About() {

  return (
    <div>

          <InteractMatrix/>

    </div>
  )
}

export default About