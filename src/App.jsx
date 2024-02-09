import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loading from "./Loading";
import { OrbitControls, Sky } from "@react-three/drei";
import { Ground } from "./components/Ground";
import { Physics } from "@react-three/cannon";
import Model from "./Model";
import { FPV } from "./components/FPV";
import { User } from "./components/User";

const App = () => {
  const [geometries, setGeometries] = useState([]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows>
        <Suspense fallback={<Loading />}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.7} />
          <Physics>
            <FPV />
            <User />
            <Model setGeometries={setGeometries} />
            <Ground />
            {/* {geometries.map((geometry, index) => {
              return (
                <PhysicsBox
                  key={index}
                  geometry={geometry}
                  position={[0, 0, 0]}
                />
              );
            })} */}
            {/* <axesHelper args={[5]} />
            <arrowHelper args={[5]} /> */}
          </Physics>
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default App;
