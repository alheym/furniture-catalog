'use client'

import {
  AccumulativeShadows,
  Environment,
  MeshReflectorMaterial,
  PresentationControls,
  RandomizedLight,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import Content from './content'

const Item: FC = () => {
  return (
    <div className='w-full h-full'>
      <Canvas>
        <color attach='background' args={['#101010']} />

        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={0.5} />

        <PresentationControls
          speed={2}
          global
          polar={[0, Math.PI / 4]}
          rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
          <Content />
        </PresentationControls>

        <AccumulativeShadows
          temporal
          frames={100}
          color='orange'
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.75}
          opacity={2}
          scale={12}
        >
          <RandomizedLight
            intensity={Math.PI}
            amount={8}
            radius={4}
            ambient={0.5}
            position={[5, 5, -10]}
            bias={0.001}
          />
        </AccumulativeShadows>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-1}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 300]}
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
        {/* <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} /> */}
        <Environment preset='city' />
      </Canvas>
    </div>
  )
}

export default Item
