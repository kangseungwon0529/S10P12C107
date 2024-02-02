import *as THREE from '../../node_modules/three/build/three.module.js';

class Tory{
    constructor(){
        const divContainer = document.querySelector("#webgl");
        this._divContainer = divContainer;

        let renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setPixelRatio(window.devicePixelRatio);
        divContainer.appendChild(renderer.domElement);
        this._renderer = renderer;
        
        let scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight();
        this._setupModel();

        window.onresize = this.resize.bind(this);
        this.resize();
        requestAnimationFrame(this.render.bind(this));
    }
    _setupCamera() {
        let width = this._divContainer.clientWidth;
        let height = this._divContainer.clientHeight;
        let camera = new THREE.PerspectiveCamera(
            75,
            width/height,
            0.1,
            1000
        );
        camera.position.z = 5;
        this._camera=camera;
    
    }

    _setupLight() {
       let color = 0xffffff;
       let intensity = 1;
       let light = new THREE.DirectionalLight(color,intensity);
       light.position.set(-1,2,4);
       this._scene.add(light)
    }

    _setupModel() {
        let geometry = new THREE.BoxGeometry(1,1,1);
        let meterial = new THREE.MeshPhongMaterial({color:0x44a8aa});
        let cube = new THREE.Mesh(geometry,meterial)

        this._scene.add(cube);
        this._cube = cube;

    }

    resize() {
        let width = this._divContainer.clientWidth;
        let height = this._divContainer.clientHeight;
        console.log(this._divContainer.clientWidth)
console.log(this._divContainer.clientHeight)

        this._camera.aspect = width/height;
        this._camera.updateProjectionMatrix();

        this._renderer.setSize(width,height);
    }

    update(time){
        time *= 0.001;
        this._cube.rotation.x=time;
        this._cube.rotation.y=time;
    }
    render(time) {
        this._renderer.render(this._scene,this._camera);
        this.update(time);   
        requestAnimationFrame(this.render.bind(this));
    }
}
window.onload = function(){
    new Tory();
}
console.log(THREE)

