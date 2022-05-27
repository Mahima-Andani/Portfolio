import * as THREE from "three";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from "@react-three/drei";

const tempPlane = new THREE.Object3D();

const Plane = ({ i, j }) => {
  const { viewport } = useThree()
  const material = new THREE.MeshLambertMaterial({ color: "white" });
  const PlaneGeometry = new THREE.PlaneGeometry(viewport.width/20, viewport.height/15);
  const ref = useRef();

  useFrame(({ clock }) => {
    let counter = 0;
    const t = clock.oldTime * 0.001;
    for (let x = 0; x < i; x++) {
      for (let y = 0; y < j; y++) {
        const id = counter++;
        tempPlane.position.set(i / 2 - x, j / 2 - y, 0);
        // tempPlane.rotation.z = t;
        tempPlane.updateMatrix();
        ref.current.setMatrixAt(id, tempPlane.matrix);
      }
    }
    // ref.current.rotation.z = t;
    ref.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
    <instancedMesh ref={ref} args={[PlaneGeometry, material, i * j]} />;
    <Html>
      <div class="label">Torus</div>
    </Html>
    </>
  )
};
export default Plane