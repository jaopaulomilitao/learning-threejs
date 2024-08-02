import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene, camera, renderer, controls;
let pointLight1, pointLight2, pointLightSphere1, pointLightSphere2;
let angle1 = 0,
  angle2 = Math.PI / 2;

function init() {
  // Cena
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000); // fundo preto

  // Câmera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 20, 50);

  // Renderizador
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true; // habilitar sombras
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Tipo de sombra para suavizar as sombras
  document.body.appendChild(renderer.domElement);

  // Círculo
  const circleGeometry = new THREE.CircleGeometry(50, 64);
  const circleMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
  const circle = new THREE.Mesh(circleGeometry, circleMaterial);
  circle.rotation.x = -Math.PI / 2;
  circle.receiveShadow = true;
  circle.position.y = -10;
  scene.add(circle);

  // Esfera como fonte de luz
  const lightSphereGeometry = new THREE.SphereGeometry(4, 32, 32);
  const lightSphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const lightSphere = new THREE.Mesh(lightSphereGeometry, lightSphereMaterial);
  lightSphere.position.set(0, 20, 0);
  scene.add(lightSphere);

  // Luz Pontual (simulando luz da esfera)
  const pointLight = new THREE.PointLight(0xffffff, 500, 500);
  pointLight.position.set(0, 20, 0);
  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  pointLight.shadow.camera.near = 0.5;
  pointLight.shadow.camera.far = 50;
  scene.add(pointLight);

  // Adicionar geometrias variadas
  const geometries = [
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.TorusKnotGeometry(2, 0.5, 100, 16),
    new THREE.ConeGeometry(3, 6, 32),
    new THREE.CylinderGeometry(3, 3, 6, 32),
  ];

  const materials = [
    new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    new THREE.MeshPhongMaterial({ color: 0x00ff00 }),
    new THREE.MeshLambertMaterial({ color: 0x0000ff }),
    new THREE.MeshPhysicalMaterial({ color: 0xffff00 }),
  ];

  geometries.forEach((geometry, index) => {
    const mesh = new THREE.Mesh(geometry, materials[index]);
    mesh.position.set(index * 10 - 15, -5, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
  });

  // Luz Direcional
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(10, 20, 10);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  scene.add(directionalLight);

  // Outras Luzes Pontuais
  pointLight1 = new THREE.PointLight(0xff0000, 800, 100);
  pointLight1.castShadow = true;
  scene.add(pointLight1);

  pointLight2 = new THREE.PointLight(0x00ff00, 800, 100);
  pointLight2.castShadow = true;
  scene.add(pointLight2);

  // Esferas para representar as luzes pontuais
  const pointLightSphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
  const pointLightSphereMaterial1 = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  pointLightSphere1 = new THREE.Mesh(
    pointLightSphereGeometry,
    pointLightSphereMaterial1
  );
  scene.add(pointLightSphere1);

  const pointLightSphereMaterial2 = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
  });
  pointLightSphere2 = new THREE.Mesh(
    pointLightSphereGeometry,
    pointLightSphereMaterial2
  );
  scene.add(pointLightSphere2);

  // Controle orbital
  controls = new OrbitControls(camera, renderer.domElement);

  // Função de animação
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Animação das luzes pontuais
  angle1 += 0.01;
  angle2 += 0.01;
  pointLight1.position.set(20 * Math.cos(angle1), 20, 20 * Math.sin(angle1));
  pointLightSphere1.position.copy(pointLight1.position);
  pointLight2.position.set(20 * Math.cos(angle2), 20, 20 * Math.sin(angle2));
  pointLightSphere2.position.copy(pointLight2.position);

  controls.update();
  renderer.render(scene, camera);
}

init();

// Ajustar resolução quando o tamanho da tela mudar
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
