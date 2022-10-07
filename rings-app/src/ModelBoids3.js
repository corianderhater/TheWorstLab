
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame } from "@react-three/fiber"

export function ModelBoids3({position, scale}) {
  const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/3d/b3.glb")
  const ref = useRef()
    useFrame((state) => {
      const t = state.clock.getElapsedTime()
      ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5))
      ref.current.rotation.x = Math.cos(t / 4) 
      //ref.current.rotation.y = Math.sin(t / 4) 
      //ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })

    
  return (
    <group
    position={position}
    scale={scale}
     ref={ref} 
     dispose={null}>
      <mesh receiveShadow castShadow geometry={nodes.mesh_0.geometry}>
      <meshPhysicalMaterial 
        color='cyan'
        clearcoat={1}
        clearcoatRoughness={1}
        roughness={0}
        metalness={1}
        reflectivity={1}
        emissive="pink"
        emissiveIntensity={0.02}/>
      </mesh>
    </group>
  )
}

useGLTF.preload(process.env.PUBLIC_URL + "/3d/b3.glb")
