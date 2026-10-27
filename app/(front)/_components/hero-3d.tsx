'use client'

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.8}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

function AnimatedRing() {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.5
    }
  })

  return (
    <mesh ref={ringRef} scale={2.5}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} transparent opacity={0.6} />
    </mesh>
  )
}

export function Hero3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  if (isMobile) return null

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-[500px] h-[500px] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
        <AnimatedSphere />
        <AnimatedRing />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
