'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function HolographicGrid() {
  const gridRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 2
    }
  })

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial
        color="#06b6d4"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}
