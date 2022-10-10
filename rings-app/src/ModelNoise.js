import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame } from "@react-three/fiber"

export function ModelNoise({position, scale}) {
  const { nodes } = useGLTF(process.env.PUBLIC_URL + '/3d/noise.glb')
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = Math.PI * t / 4 + Math.pow(Math.sin(t * 2)/10, 7)
    ref.current.rotation.y = Math.sin(t / 1)
  })

  return (
    <group 
    position={position} 
    scale={scale}
    ref={ref}  
    dispose={null}>

      <mesh geometry={nodes.mesh_0.geometry}>
        <meshPhysicalMaterial 
        color='gray'
        clearcoat={1}
        clearcoatRoughness={1}
        roughness={0}
        metalness={1}
        reflectivity={1}
        emissive="red"
        emissiveIntensity={0.02}/>
      </mesh>
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL + '/3d/noise.glb')
