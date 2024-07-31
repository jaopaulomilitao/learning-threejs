import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene, camera, renderer, cube, controls;

function init() {
  // Cena
  scene = new THREE.Scene();

  // Câmera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Renderizador
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Geometria do cubo
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x808080 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Controle orbital
  controls = new OrbitControls(camera, renderer.domElement);

  // helper
  scene.add(new THREE.AxesHelper(30));

  // Função de animação
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Rotação do cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

init();
