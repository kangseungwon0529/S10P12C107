import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Math } from "three.js";

function ToryElement3D(){

    let refMesh = useRef()
    // 콜백함수 하나를 인자로 받음
    

    return(
        <>
        {/* 조명 */}
        <directionalLight position={[1,1,1]} />
        <axesHelper scale={10}/>

        {/* 화면상 요녀석 적용하고 쓰려면 npm install @react-three/drei*/}
        <OrbitControls/>

        <mesh ref={refMesh} 
        // y축으로 2만큼 이동해라 position={[0,2,0]}랑 같은 기능을 하는것
        position-y={2}
        // 회전하는 상자 만들건데 라디안 적용해줘서 넣어라rotation={{0,45*Math.PI/180,0}}
        rotation-y={45*Math.PI/180}
        >
            {/* 박스 재질 */}
            <boxGeometry/>
            {/* 박스의 색 */}
            <meshStandardMaterial color="#e67e22"/>


        </mesh>
        
        </>
    )
}

export default ToryElement3D;