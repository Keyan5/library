import { useGLTF } from "@react-three/drei";

const SCALE = 0.2;

const Model = ({ setGeometries }) => {
  // const { scene } = useLoader(GLTFLoader, "./library/library.gltf");
  // const { scene, nodes } = useGLTF("./Library/LIBRARY3.0.glb");
  // const { scene, nodes } = useGLTF("./Library/LIBRARYJOINED.glb");
  const { scene, nodes } = useGLTF("./Library/Library_compressed.glb");
  scene.castShadow = true;
  scene.receiveShadow = true;
  // scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.castShadow = true;
  //     child.receiveShadow = true;
  //     setGeometries((geometries) => [...geometries, child.geometry]);
  //   }
  // });
  scene.scale.set(SCALE, SCALE, SCALE);
  return <primitive object={scene} />;
};

// const Model = () => {
//   const { nodes } = useLoader(GLTFLoader, './Library/library.gltf')
//   const geo = useMemo(() => new THREE.fromBufferGeometry(nodes.Cylinder.geometry), [nodes])
//   const [ref, api] = useConvexPolyhedron(() => ({ mass: 10, ...props, args: geo }))
//   return (
//     <mesh
//       castShadow
//       ref={ref}
//       geometry={nodes.Cylinder.geometry}
//       dispose={null}
//       onClick={e => {
//         console.log('forceful!')
//         api.applyImpulse([10, 30, 0], [0, 0, 0])
//       }}>
//       <meshNormalMaterial attach="material" />
//     </mesh>
//   )
// }

export default Model;
