import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById('canvas');

// 1. Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000");

// 2. Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create and add a cube object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: "#468585" , emissive: "#468585"});

const dodecahedron = new THREE.Mesh(geometry, material);


const boxGeometry = new THREE.BoxGeometry( 2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: "#B4B4B3", emissive: "#468585"});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// 4. Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 100);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Setup the renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);



// 6. Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// 7. Animate the scene
function animate() {
    requestAnimationFrame(animate); 

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;
   
    box.rotation.y += 0.005;


    controls.update();
    renderer.render(scene, camera);
}

// 8. Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();