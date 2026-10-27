'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function HoloMesh() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1
      meshRef.current.rotation.y = Math.cos(state.clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={1.5}>
      <planeGeometry args={[2, 3]} />
      <MeshDistortMaterial
        color="#06b6d4"
        distort={0.3}
        speed={2}
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  )
}

interface HolographicCardProps {
  children: React.ReactNode
  className?: string
}

export function HolographicCard({ children, className = '' }: HolographicCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative overflow-hidden cyberpunk-card group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <HoloMesh />
          </Canvas>
        </div>
      )}
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
    </div>
  )
}
