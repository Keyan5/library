import { useBox, usePlane } from "@react-three/cannon";

const planeDimW = 9;
const planeDimL = 40.25;

export const FirstFloor = () => {
  const [leftPlaneRef] = useBox(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [1, 0, -5.25],
    args: [planeDimW, planeDimL, -0.001],
  }));

  const [rightPlaneRef] = useBox(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [43, 0, -6],
    args: [planeDimW, planeDimL, -0.001],
  }));

  return (
    <group>
      <mesh ref={leftPlaneRef}>
        <planeGeometry attach="geometry" args={[planeDimW, planeDimL]} />
        <meshStandardMaterial attach="material" color="red" />
      </mesh>
      <mesh ref={rightPlaneRef}>
        <planeGeometry attach="geometry" args={[planeDimW, planeDimL]} />
        <meshStandardMaterial attach="material" color="hotpink" />
      </mesh>
    </group>
  );
};
