'use client'

import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

function LoadingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1)
    }
  })

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={0.8}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.6}
          speed={4}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  )
}

function LoadingRing() {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 2
    }
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[1.5, 0.02, 16, 100]} />
      <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1} />
    </mesh>
  )
}

function LoadingScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#a855f7" />
      <LoadingSphere />
      <LoadingRing />
    </Canvas>
  )
}

function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
      
      <div className="relative w-64 h-64">
        <LoadingScene />
      </div>

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-80 space-y-4">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-cyan-400">INITIALIZING SYSTEM</span>
          <span className="text-purple-400">{Math.floor(progress)}%</span>
        </div>
        <div className="h-1 bg-border/40 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="text-center font-mono text-xs text-muted-foreground">
          <span className="animate-pulse">&gt; LOADING COMPULINK CORE...</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
    </div>
  )
}

export default Loading
