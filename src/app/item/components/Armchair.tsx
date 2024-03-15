/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/armchair.gltf --types 
Author: rickmaolly (https://sketchfab.com/rickmaolly)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/armchair--leather-c0755830a1d54d27b86a80c335ccc9c1
Title: Armchair_ Leather
*/

import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

import { useCustomization } from '../_store/customizationStore'
import { TextureProps } from './Chair'

type GLTFResult = GLTF & {
  nodes: {
    Plane001_Material_0: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export const Armchair = () => {
  const { nodes, materials } = useGLTF('./models/armchair.gltf') as GLTFResult

  const [material, legs, mainColor, detailColor] = useCustomization((state) => [
    state.material,
    state.legs,
    state.mainColor,
    state.detailColor,
  ])

  const leatherTextureProps: TextureProps = useTexture({
    normalMap: './textures/armchair/Material_normal.png',
    roughnessMap: './textures/armchair/Material_metallicRoughness.png',
    aoMap: './textures/leather/Leather_008_Ambient Occlusion.jpg',
  })

  leatherTextureProps.normalMap.repeat.set(3, 3)
  leatherTextureProps.roughnessMap.repeat.set(3, 3)
  leatherTextureProps.aoMap.repeat.set(3, 3)

  return (
    <group dispose={null} rotation={[0, Math.PI / 5, 0]}>
      <group scale={0.03}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes.Plane001_Material_0.geometry}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <meshStandardMaterial
            {...leatherTextureProps}
            color={mainColor.color}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/armchair.gltf')
