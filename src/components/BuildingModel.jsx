import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCompoundBody } from "@react-three/cannon";

const BuildingModel = () => {
  const group = useRef();
  const { nodes } = useGLTF("./Library/LIBRARYJOINED.glb");

  console.log(nodes);

  // Extracting the children from the GLB file
  const children = nodes.Building.children;

  // Create physics bodies for each child object
  const physicsObjects = children.map((child, index) => (
    <PhysicsObject key={index} {...child} />
  ));

  return <group ref={group}>{physicsObjects}</group>;
};

const PhysicsObject = ({ geometry, materials }) => {
  // You may need to adjust the size and position of the physics shape based on each object
  const compoundBody = useCompoundBody(() => {
    return {
      mass: 1,
      position: [0, 0, 0],
      shapes: [
        {
          type: "Box",
          args: [1, 1, 1], // Adjust the size of the physics shape according to the object
          position: [0, 0, 0],
          rotation: [0, 0, 0],
        },
      ],
    };
  });

  return (
    <mesh
      key={index}
      geometry={geometry}
      material={materials}
      receiveShadow
      castShadow
      scale={[1, 1, 1]}
      ref={compoundBody}
    />
  );
};

export default BuildingModel;
