import { Box, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useControls } from "leva"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { MathUtils, Mesh, MeshStandardMaterial, BoxGeometry,AxesHelper } from "three"; // THREE 객체들을 개별적으로 가져와야 함
// drei => r3f 에서 이용할 수 있는 유용한 콤포넌트들을 모아둔 패키지
// useContros 는 leva를 설치하여 적용할 수 있다 이는 오른쪽 위에 사이즈를 변경하는 버튼생김


function ToryElement3D(){
    const model = useGLTF("./humen/scene.glb")
    
    return(
    <>
    <OrbitControls/>
    <Environment preset="sunset"/>

    <primitive
    scale = {5}
    object={model.scene}
    />

    </>
    )
}

export default ToryElement3D;