// import React, { useRef, useState, useEffect } from 'react';
// import * as THREE from 'three';
// import { useGLTFLoader } from '@react-three/drei';

// const CameraApp = () => {
//     const videoRef = useRef();
//     const [videoStream, setVideoStream] = useState(null);

//     useEffect(() => {
//         let scene = new THREE.Scene();
//         let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//         let renderer = new THREE.WebGLRenderer();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         // 비디오 텍스처 및 재질, 지오메트리 생성 및 메시에 적용
//         const videoTexture = new THREE.VideoTexture(videoRef.current);
//         const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture });
//         const videoGeometry = new THREE.PlaneGeometry(16, 9);
//         const videoMesh = new THREE.Mesh(videoGeometry, videoMaterial);
//         scene.add(videoMesh);

//         // GLTF 모델 로드 및 씬에 추가
//         let loader = new THREE.GLTFLoader();
//         loader.load("../static/img/hmm/file.gltf", function (gltf) {
//             scene.add(gltf.scene);
//             animate();
//         }, undefined, function (error) {
//             console.error('Error loading GLTF model:', error);
//         });

//         // 카메라 초기 위치 설정
//         camera.position.z = 3;

//         // 애니메이션 함수 정의
//         const animate = () => {
//             if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
//                 videoTexture.needsUpdate = true;
//             }

//             renderer.render(scene, camera);
//             requestAnimationFrame(animate);
//         };

//         animate();

//         // 창 크기 변경 이벤트 리스너
//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             // 컴포넌트가 언마운트될 때 정리 작업 수행
//             window.removeEventListener('resize', handleResize);
//             stopVideo();
//         };
//     }, []); // useEffect가 처음 마운트될 때 한 번만 실행

//     const startVideo = () => {
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then((stream) => {
//                 videoRef.current.srcObject = stream;
//                 videoRef.current.play();

//                 const videoTexture = new THREE.VideoTexture(videoRef.current);
//                 scene.getObjectByName('videoMesh').material.map = videoTexture;

//                 setVideoStream(stream);
//             })
//             .catch((error) => {
//                 console.error('Error accessing webcam:', error);
//             });
//     };

//     const stopVideo = () => {
//         if (videoStream) {
//             const tracks = videoStream.getTracks();
//             tracks.forEach(track => track.stop());
//         }
//     };

//     const handleFrontButtonClick = () => {
//         stopVideo();
//         startVideo();
//     };

//     const handleBackButtonClick = () => {
//         stopVideo();
//         navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
//             .then((stream) => {
//                 videoRef.current.srcObject = stream;
//                 videoRef.current.play();

//                 const videoTexture = new THREE.VideoTexture(videoRef.current);
//                 scene.getObjectByName('videoMesh').material.map = videoTexture;

//                 setVideoStream(stream);
//             })
//             .catch((error) => {
//                 console.error('Error accessing webcam:', error);
//             });
//     };

//     return (
//         <>
//             {/* 렌더러에 대한 참조 및 비디오 엘리먼트 */}
//             <video ref={videoRef} style={{ display: 'none' }}></video>
//             {/* 카메라 앱 렌더러 */}
//             <div id="camera-app"></div>
//             {/* 프론트/백 카메라 전환 버튼 */}
//             <button id="btn-front" onClick={handleFrontButtonClick}>Front Camera</button>
//             <button id="btn-back" onClick={handleBackButtonClick}>Back Camera</button>
//         </>
//     );
// };

// export default CameraApp;
