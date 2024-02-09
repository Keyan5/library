import { useConvexPolyhedron } from "@react-three/cannon";

const PhysicsBox = ({ geometry, position }) => {
  const [ref, api] = useConvexPolyhedron(() => ({
    mass: 10,
    args: geometry,
    position,
  }));

  return (
    <mesh castShadow ref={ref} geometry={geometry} dispose={null}>
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};

export default PhysicsBox;
