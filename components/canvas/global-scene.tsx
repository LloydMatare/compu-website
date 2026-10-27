'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { HolographicGrid } from './holographic-grid'
import { CyberpunkParticles } from './particles'

export function GlobalScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) return null

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a855f7" />
        <HolographicGrid />
        <CyberpunkParticles />
      </Canvas>
    </div>
  )
}
