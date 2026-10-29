<template>
  <div ref="container" class="three-scene" aria-hidden="true" />
</template>

<script setup lang="ts">
import * as THREE from 'three';

const container = ref<HTMLElement | null>(null);
let frame = 0;
let cleanup = () => {};

onMounted(() => {
  if (!container.value) return;
  const host = container.value;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, host.clientWidth / host.clientHeight, 0.1, 100);
  camera.position.z = 7;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(host.clientWidth, host.clientHeight);
  host.appendChild(renderer.domElement);

  const group = new THREE.Group();
  scene.add(group);
  const geometry = new THREE.IcosahedronGeometry(2.2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x8df5d0, wireframe: true, transparent: true, opacity: 0.3 });
  const shell = new THREE.Mesh(geometry, material);
  group.add(shell);

  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(420 * 3);
  for (let i = 0; i < positions.length; i += 3) {
    const radius = 2.8 + Math.random() * 2.2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.cos(phi);
    positions[i + 2] = radius * Math.sin(phi) * Math.sin(theta);
  }
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xffbd69, size: 0.025, transparent: true, opacity: 0.65 }));
  group.add(particles);

  const pointer = { x: 0, y: 0 };
  const onPointerMove = (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.5;
    pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.35;
  };
  const resize = () => {
    camera.aspect = host.clientWidth / host.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(host.clientWidth, host.clientHeight);
  };
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('resize', resize);
  const animate = () => {
    shell.rotation.x += 0.0018;
    shell.rotation.y += 0.003;
    particles.rotation.y -= 0.001;
    group.rotation.x += (pointer.y - group.rotation.x) * 0.02;
    group.rotation.z += (pointer.x - group.rotation.z) * 0.02;
    renderer.render(scene, camera);
    frame = requestAnimationFrame(animate);
  };
  animate();
  cleanup = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('resize', resize);
    geometry.dispose(); material.dispose(); particleGeometry.dispose(); particles.material.dispose(); renderer.dispose();
    renderer.domElement.remove();
  };
});

onBeforeUnmount(() => cleanup());
</script>

<style scoped>
.three-scene { position: absolute; inset: 0; min-height: 100%; }
.three-scene canvas { display: block; width: 100%; height: 100%; }
</style>
