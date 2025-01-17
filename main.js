import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xFF00FF});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let previousTime = 0;

function animate(time) {
    const deltaTime = (time - previousTime) / 1000;
    previousTime = time;

    cube.rotation.x += 1 * deltaTime;
    cube.rotation.y += 1 * deltaTime;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate)

