import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelSzerszen({position, scale}) {

  const { nodes } = useGLTF('/3d/szerszen.glb')
  const ref = useRef()

  return (
    <group 
    position={position} 
    scale={scale}
    ref={ref}  
    dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry}>
      
        <meshPhysicalMaterial 
        color='white'
        clearcoat={1}
        clearcoatRoughness={1}
        roughness={0}
        metalness={1}
        reflectivity={1}
        emissive="red"
        emissiveIntensity={0.02}
        />
      </mesh>

    </group>
  )
}

useGLTF.preload('/3d/szerszen.glb')
