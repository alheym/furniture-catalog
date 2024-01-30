import { Float } from '@react-three/drei'
import { FC, useState } from 'react'

const Content: FC = () => {
  const [hovered, setHover] = useState(false)
  return (
    <Float
      speed={5}
      rotationIntensity={1.5}
      floatIntensity={1}
      floatingRange={[1, 1.5]}
    >
      <mesh
        rotation={[0, -Math.PI / 8, 0]}
        castShadow
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    </Float>
  )
}

export default Content
