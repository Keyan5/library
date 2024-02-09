import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useMemo } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { Physics, usePlane, useConvexPolyhedron } from 'use-cannon'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './styles.css'

function Diamond(props) {
  const { nodes } = useLoader(GLTFLoader, '/diamond.glb')
  const geo = useMemo(() => new THREE.Geometry().fromBufferGeometry(nodes.Cylinder.geometry), [nodes])
  const [ref, api] = useConvexPolyhedron(() => ({ mass: 10, ...props, args: geo }))
  return (
    <mesh
      castShadow
      ref={ref}
      geometry={nodes.Cylinder.geometry}
      dispose={null}
      onClick={e => {
        console.log('forceful!')
        api.applyImpulse([10, 30, 0], [0, 0, 0])
      }}>
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

