'use client'

import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { FC } from 'react'
import Content from './content'

const Item: FC = () => {
  return (
    <div className='w-full h-full'>
      <Canvas>
        <color attach='background' args={['#1c1e20']} />
        <fog attach='fog' args={['#1c1e20', 10, 20]} />

        <PresentationControls
          speed={2}
          global
          polar={[-0.1, Math.PI / 4]}
          rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
          <Stage environment='forest' intensity={1.3}>
            <Content />
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
            <planeGeometry args={[170, 170]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color='#101010'
              metalness={0.5}
              mirror={0}
            />
          </mesh>
        </PresentationControls>
      </Canvas>
    </div>
  )
}

export default Item
