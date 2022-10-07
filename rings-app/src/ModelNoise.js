import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Color, MeshStandardMaterial } from 'three'
import {useFrame } from "@react-three/fiber"

export function ModelNoise({position, scale}) {
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + '/3d/noise.glb')
  const ref = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t * 30)/20)
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
