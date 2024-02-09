const useGeometry = (scene) => {
  const geometries = [];

  const traverse = (object) => {
    if (object.isMesh) {
      // Collect the geometry of the mesh
      object.castShadow = true;
      object.receiveShadow = true;
      geometries.push(object.geometry);
    }

    // Continue traversing the children
    if (object.children && object.children.length) {
      object.children.forEach((child) => traverse(child));
    }
  };

  traverse(scene);

  return geometries;
};

export default useGeometry;
