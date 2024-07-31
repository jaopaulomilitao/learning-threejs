import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene, camera, renderer, cube, controls, light;

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
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  // Geometria do cubo
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
  cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  scene.add(cube);

  // Chão
  const planeGeometry = new THREE.PlaneGeometry(10, 10);
  const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -1;
  plane.receiveShadow = true;
  scene.add(plane);

  // Luz
  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  light.castShadow = true;
  scene.add(light);

  // Controle orbital
  controls = new OrbitControls(camera, renderer.domElement);

  // Eixos auxiliares
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
