import { usePlane } from "@react-three/cannon";
import { dirtTexture } from "../images/textures";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  dirtTexture.repeat.set(100, 100);

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={dirtTexture} />
    </mesh>
  );
};
