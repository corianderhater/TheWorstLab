import React, { useRef, useState } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import {useFrame } from "@react-three/fiber"
import '../index.scss';
import * as THREE from 'three';


export function ModelCard({modelPath, position, scale}) {
  const { nodes } = useGLTF(process.env.PUBLIC_URL + modelPath)
    // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  var hitGeom = new THREE.BoxBufferGeometry(13, 13, 13);
var hitMat = new THREE.MeshBasicMaterial({visible: false});
var hitSphere = new THREE.SphereGeometry(14, 4, 4);

var bbox = new THREE.Box3().setFromObject(nodes.mesh_0);
// debugger
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = Math.PI * t / 40
    ref.current.rotation.y = Math.sin(t / 5) 
  })

  return (
    <group position={clicked ? [-60,5,0] : position} scale={scale} dispose={null}>

    <mesh 
      geometry={hitSphere} material={hitMat}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      ></mesh>

      <mesh ref={ref} geometry={nodes.mesh_0.geometry}
>
        <meshPhysicalMaterial 
        color= {hovered ? 'gold' : 'white'}
        clearcoat={1}
        clearcoatRoughness={1}
        roughness={0}
        metalness={1}
        reflectivity={1}
        emissive="red"
        emissiveIntensity={0.02}/>
      </mesh>
      <Html scale={20} rotation={[0, 0, 0]} position={[0, -10, 0]} occlude>
          <div className="annotation">
            <span style={{ fontSize: '1.5em' }}> {hovered ? 'hovered' : 'notHovered'}</span>
          </div>
      </Html>
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL + '/3d/noise.glb')
