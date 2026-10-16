import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080e, 0.04);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 20;

    // 3. Renderer initialization
    const isHeadless = typeof navigator !== 'undefined' && (/HeadlessChrome/i.test(navigator.userAgent) || navigator.webdriver);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isHeadless,
      powerPreference: 'low-power'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    // 4. Generate 3D Constellation Nodes (Web3 Network Topology)
    const nodeCount = 75;
    const nodeGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodeCount * 3);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 36;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 18;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.007,
        y: (Math.random() - 0.5) * 0.007,
        z: (Math.random() - 0.5) * 0.005
      });
    }

    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Point cloud canvas texture with radial glow
    const pointCanvas = document.createElement('canvas');
    pointCanvas.width = 32;
    pointCanvas.height = 32;
    const pCtx = pointCanvas.getContext('2d');
    if (pCtx) {
      const grad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(147, 197, 253, 1)');
      grad.addColorStop(0.3, 'rgba(59, 130, 246, 0.8)');
      grad.addColorStop(1, 'rgba(59, 130, 246, 0)');
      pCtx.fillStyle = grad;
      pCtx.fillRect(0, 0, 32, 32);
    }
    const pointTexture = new THREE.CanvasTexture(pointCanvas);
    pointTexture.colorSpace = THREE.SRGBColorSpace;

    const pointMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.75,
      map: pointTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pointCloud = new THREE.Points(nodeGeometry, pointMaterial);
    scene.add(pointCloud);

    // 5. Dynamic Line Interconnections
    const maxLines = nodeCount * 5;
    const linePositions = new Float32Array(maxLines * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // 6. Interactive Floating Geometric Polyhedra (3D Web3 Crystals & Blocks)
    const polyGroup = new THREE.Group();
    scene.add(polyGroup);

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });

    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8,
      wireframe: false,
      transparent: true,
      opacity: 0.08
    });

    // Mesh 1: Octahedron (Ethereum Crystal)
    const octaGeo = new THREE.OctahedronGeometry(1.0, 0);
    const poly1 = new THREE.Group();
    poly1.add(new THREE.Mesh(octaGeo, wireMat));
    poly1.add(new THREE.Mesh(octaGeo, innerMat));
    poly1.position.set(-11, 7, -6);
    polyGroup.add(poly1);

    // Mesh 2: Icosahedron (Decentralized Node)
    const icosaGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const poly2 = new THREE.Group();
    poly2.add(new THREE.Mesh(icosaGeo, wireMat));
    poly2.add(new THREE.Mesh(icosaGeo, innerMat));
    poly2.position.set(12, -6, -7);
    polyGroup.add(poly2);

    // Mesh 3: Torus Ring (Smart Contract Loop)
    const torusGeo = new THREE.TorusGeometry(1.1, 0.2, 8, 24);
    const poly3 = new THREE.Mesh(torusGeo, wireMat);
    poly3.position.set(10, 8, -8);
    polyGroup.add(poly3);

    // Mesh 4: Dodecahedron (Consensus Block)
    const dodecaGeo = new THREE.DodecahedronGeometry(0.85, 0);
    const poly4 = new THREE.Mesh(dodecaGeo, wireMat);
    poly4.position.set(-9, -8, -5);
    polyGroup.add(poly4);

    // 7. Cursor Interaction with Damping & Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY * 0.003;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 8. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      currentMouseX = THREE.MathUtils.damp(currentMouseX, targetMouseX, 3.5, delta);
      currentMouseY = THREE.MathUtils.damp(currentMouseY, targetMouseY, 3.5, delta);

      // Camera parallax reacting to cursor and scroll
      camera.position.x = currentMouseX * 2.0;
      camera.position.y = -currentMouseY * 2.0 - scrollY;
      camera.lookAt(0, -scrollY * 0.5, 0);

      // Rotate geometric polyhedra with subtle floating bob
      poly1.rotation.x += delta * 0.35;
      poly1.rotation.y += delta * 0.45;
      poly1.position.y = 7 + Math.sin(elapsedTime * 0.8) * 0.6;

      poly2.rotation.x -= delta * 0.3;
      poly2.rotation.y += delta * 0.4;
      poly2.position.y = -6 + Math.cos(elapsedTime * 0.7) * 0.6;

      poly3.rotation.x += delta * 0.5;
      poly3.rotation.z += delta * 0.3;
      poly3.position.y = 8 + Math.sin(elapsedTime * 0.9) * 0.5;

      poly4.rotation.y += delta * 0.4;
      poly4.rotation.x += delta * 0.25;
      poly4.position.y = -8 + Math.cos(elapsedTime * 0.8) * 0.5;

      // Update node positions
      const posAttr = nodeGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        posArray[i * 3] += nodeVelocities[i].x;
        posArray[i * 3 + 1] += nodeVelocities[i].y;
        posArray[i * 3 + 2] += nodeVelocities[i].z;

        // Bounce back within bounds
        if (posArray[i * 3] > 18 || posArray[i * 3] < -18) nodeVelocities[i].x *= -1;
        if (posArray[i * 3 + 1] > 14 || posArray[i * 3 + 1] < -14) nodeVelocities[i].y *= -1;
        if (posArray[i * 3 + 2] > 9 || posArray[i * 3 + 2] < -9) nodeVelocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Update line connections based on proximity (< 5.2 units)
      let lineVertexIndex = 0;
      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const linePosArr = linePosAttr.array as Float32Array;
      const maxDistance = 5.2;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = posArray[i * 3] - posArray[j * 3];
          const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
          const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance && lineVertexIndex < maxLines * 6 - 6) {
            linePosArr[lineVertexIndex++] = posArray[i * 3];
            linePosArr[lineVertexIndex++] = posArray[i * 3 + 1];
            linePosArr[lineVertexIndex++] = posArray[i * 3 + 2];

            linePosArr[lineVertexIndex++] = posArray[j * 3];
            linePosArr[lineVertexIndex++] = posArray[j * 3 + 1];
            linePosArr[lineVertexIndex++] = posArray[j * 3 + 2];
          }
        }
      }

      lineGeometry.setDrawRange(0, lineVertexIndex / 3);
      linePosAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      nodeGeometry.dispose();
      pointMaterial.dispose();
      pointTexture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      octaGeo.dispose();
      icosaGeo.dispose();
      torusGeo.dispose();
      dodecaGeo.dispose();
      wireMat.dispose();
      innerMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70"
      aria-hidden="true"
    />
  );
};
