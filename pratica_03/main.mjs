import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene, camera, renderer, cube, sphere, controls;

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

  // Textura
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "https://threejsfundamentals.org/threejs/resources/images/wall.jpg"
  );

  // Geometria do cubo com textura
  const cubeGeometry = new THREE.BoxGeometry();
  const cubeMaterial = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = -1.5;
  scene.add(cube);

  // Geometria da esfera
  const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.x = 1.5;
  scene.add(sphere);

  // Controle orbital
  controls = new OrbitControls(camera, renderer.domElement);

  // Eixos auxiliares
  scene.add(new THREE.AxesHelper(30));

  // Função de animação
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Rotação dos objetos
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}

init();
