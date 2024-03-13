'use client'

import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import { Configurator } from './Configurator'
import Content from './content'

const Item: FC = () => {
  return (
    <div className='w-full h-full'>
      <Canvas
        gl={{ antialias: false, preserveDrawingBuffer: true }}
        shadows
        camera={{ position: [0, 1, 7], fov: 45 }}
      >
        <color attach='background' args={['#213547']} />
        <fog attach='fog' args={['#213547', 10, 20]} />
        <ambientLight intensity={1.5} />
        <directionalLight
          castShadow
          position={[50, 90, 0]}
          intensity={1.8}
          shadow-mapSize={1024}
        />

        <group position={[0, -1.5, 0]} receiveShadow>
          <Content />
        </group>

        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={20}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color='#101010'
            metalness={0.5}
            mirror={0}
          />
        </mesh>
        <Environment preset='city' />
      </Canvas>
      <Configurator />
    </div>
  )
}

export default Item
