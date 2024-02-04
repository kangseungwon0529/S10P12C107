import { OrbitControls, useGLTF, Environment,useAnimations } from "@react-three/drei";
import { useEffect, useState } from "react";

function Tory() {
  const model = useGLTF("/humen/limittory.gltf");
  const animations = useAnimations(model.animations,model.scene)
  const {actionName} = useControls({
    actionName:{
        value: animations.name[1],
        options:animations.names
    }
  })

  useEffect(()=> {
    const action = animations.action[actionName]
    action.reset().fadeIn(0.5).play()

    return () =>{
        action.fadeout(0.5)
    }
  },[actionName])


  const [height, setHeight] = useState(0);

  useEffect(() => {
    let minY = Infinity,
      maxY = -Infinity;

    model.scene.traverse((item) => {
      if (item.isMesh) {
        const geomBbox = item.geometry.boundingBox;
        if (minY > geomBbox.min.y) minY = geomBbox.min.y;
        if (maxY < geomBbox.max.y) maxY = geomBbox.max.y;
      }
    });

    const h = maxY - minY;
    setHeight(h);
    console.log(h);
  }, [model.scene]);

  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />

      <primitive scale={5} object={model.scene} />
    </>
  );
}

export default Tory;
