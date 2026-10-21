import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RotateCw, Layers, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const Web3BlockCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Interactive dock states
  const [exploded, setExploded] = useState<boolean>(false);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeView, setActiveView] = useState<'isometric' | 'top' | 'front'>('isometric');
  const [dockCollapsed, setDockCollapsed] = useState<boolean>(false);
  const [selectedPartName, setSelectedPartName] = useState<string>('Cryptographic Ledger Core');

  // Mutable refs for 60fps loop
  const explodedTargetRef = useRef<number>(0);
  const currentExplodedRef = useRef<number>(0);
  const autoRotateRef = useRef<boolean>(true);
  const targetCameraPosRef = useRef<THREE.Vector3>(new THREE.Vector3(3.8, 2.6, 4.2));

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    explodedTargetRef.current = exploded ? 1.0 : 0.0;
  }, [exploded]);

  useEffect(() => {
    if (activeView === 'isometric') {
      targetCameraPosRef.current.set(3.8, 2.6, 4.2);
    } else if (activeView === 'top') {
      targetCameraPosRef.current.set(0.01, 5.2, 0.01);
    } else if (activeView === 'front') {
      targetCameraPosRef.current.set(0, 1.2, 5.0);
    }
  }, [activeView]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene setup & Fog matching dark canvas (#07090e)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07090e);
    scene.fog = new THREE.FogExp2(0x07090e, 0.075);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(3.8, 2.6, 4.2);
    const cameraLookAt = new THREE.Vector3(0, 0.6, 0);
    camera.lookAt(cameraLookAt);

    // 3. Renderer initialization
    const isHeadless = typeof navigator !== 'undefined' && (/HeadlessChrome/i.test(navigator.userAgent) || navigator.webdriver);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = !isHeadless;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Studio Environment Reflection (RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 5. Studio 3-Point Lighting Rig
    const warmKeyLight = new THREE.DirectionalLight(0xfff1e6, 3.0);
    warmKeyLight.position.set(4, 7, 5);
    warmKeyLight.castShadow = !isHeadless;
    warmKeyLight.shadow.mapSize.width = 1024;
    warmKeyLight.shadow.mapSize.height = 1024;
    warmKeyLight.shadow.bias = -0.0005;
    warmKeyLight.shadow.normalBias = 0.02;
    warmKeyLight.shadow.camera.near = 0.5;
    warmKeyLight.shadow.camera.far = 18;
    warmKeyLight.shadow.camera.left = -3;
    warmKeyLight.shadow.camera.right = 3;
    warmKeyLight.shadow.camera.top = 3;
    warmKeyLight.shadow.camera.bottom = -3;
    scene.add(warmKeyLight);

    const coolHemiFill = new THREE.HemisphereLight(0x38bdf8, 0x07090e, 1.5);
    scene.add(coolHemiFill);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 2.0);
    rimLight.position.set(-5, 3, -4);
    scene.add(rimLight);

    // Contact shadow
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
      grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    shadowTexture.colorSpace = THREE.SRGBColorSpace;

    const shadowPlaneGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const shadowPlaneMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false
    });
    const shadowMesh = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = 0.01;
    scene.add(shadowMesh);

    // Grounded Pedestal
    const baseGeo = new THREE.CylinderGeometry(1.5, 1.65, 0.08, 36);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.35
    });
    const basePlinth = new THREE.Mesh(baseGeo, baseMat);
    basePlinth.position.y = 0.04;
    basePlinth.receiveShadow = true;
    scene.add(basePlinth);

    // 6. Master Assembly
    const rootGroup = new THREE.Group();
    rootGroup.position.y = 0.08;
    scene.add(rootGroup);

    const coreGroup = new THREE.Group();
    const ringsGroup = new THREE.Group();
    const cornerPostsGroup = new THREE.Group();
    const beaconGroup = new THREE.Group();

    rootGroup.add(coreGroup);
    rootGroup.add(ringsGroup);
    rootGroup.add(cornerPostsGroup);
    rootGroup.add(beaconGroup);

    // PART 1: Core Chassis
    const chassisGeo = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.88,
      roughness: 0.2,
    });
    const chassisMesh = new THREE.Mesh(chassisGeo, chassisMat);
    chassisMesh.position.y = 0.9;
    chassisMesh.castShadow = true;
    chassisMesh.receiveShadow = true;
    chassisMesh.name = 'Chassis Frame';
    coreGroup.add(chassisMesh);

    // Wireframe edges on chassis for high-tech blueprint feel
    const wireGeo = new THREE.EdgesGeometry(chassisGeo);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    wireMesh.position.y = 0.9;
    coreGroup.add(wireMesh);

    // PART 2: Crystalline Refractive Inner Vault
    const innerCoreGeo = new THREE.OctahedronGeometry(0.55, 1);
    const innerCoreMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.85,
      opacity: 1,
      transparent: true,
      roughness: 0.08,
      metalness: 0.1,
      ior: 1.52,
      thickness: 1.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    innerCoreMesh.position.y = 0.9;
    innerCoreMesh.castShadow = true;
    innerCoreMesh.name = 'Cryptographic Ledger Core';
    coreGroup.add(innerCoreMesh);

    // PART 3: Primary Gimbal Verification Ring
    const ringGeo1 = new THREE.TorusGeometry(1.15, 0.035, 16, 64);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      metalness: 0.95,
      roughness: 0.12,
    });
    const gimbalRing1 = new THREE.Mesh(ringGeo1, ringMat1);
    gimbalRing1.rotation.x = Math.PI / 2;
    gimbalRing1.position.y = 0.9;
    gimbalRing1.castShadow = true;
    gimbalRing1.name = 'State Consensus Gimbal';
    ringsGroup.add(gimbalRing1);

    // PART 4: Secondary Gimbal Ring
    const ringGeo2 = new THREE.TorusGeometry(1.35, 0.025, 16, 64);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      metalness: 0.92,
      roughness: 0.16,
    });
    const gimbalRing2 = new THREE.Mesh(ringGeo2, ringMat2);
    gimbalRing2.rotation.x = Math.PI / 3.5;
    gimbalRing2.position.y = 0.9;
    gimbalRing2.castShadow = true;
    gimbalRing2.name = 'Decentralized Oracle Ring';
    ringsGroup.add(gimbalRing2);

    // PART 5-8: 4 Node Bus Couplers
    const cornerPositions = [
      [-0.85, 0.9, -0.85],
      [0.85, 0.9, -0.85],
      [0.85, 0.9, 0.85],
      [-0.85, 0.9, 0.85]
    ];
    const postGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.4, 16);
    const postMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.8,
      roughness: 0.3,
    });
    const anchorGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const anchorMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.9,
      roughness: 0.15
    });

    cornerPositions.forEach(([x, y, z]) => {
      const postMesh = new THREE.Mesh(postGeo, postMat);
      postMesh.position.set(x, y, z);
      postMesh.castShadow = true;
      cornerPostsGroup.add(postMesh);

      const anchorMesh = new THREE.Mesh(anchorGeo, anchorMat);
      anchorMesh.position.set(x, y + 0.7, z);
      anchorMesh.castShadow = true;
      cornerPostsGroup.add(anchorMesh);
    });

    // PART 9: Upper Transceiver Cap & Optical Hash Beacon
    const capGeo = new THREE.CylinderGeometry(0.25, 0.38, 0.22, 24);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.88,
      roughness: 0.2
    });
    const beaconMesh = new THREE.Mesh(capGeo, capMat);
    beaconMesh.position.y = 1.7;
    beaconMesh.castShadow = true;
    beaconMesh.name = 'Hash Beacon Transceiver';
    beaconGroup.add(beaconMesh);

    const prismGeo = new THREE.ConeGeometry(0.18, 0.35, 12);
    const prismMat = new THREE.MeshPhysicalMaterial({
      color: 0x60a5fa,
      transmission: 0.9,
      roughness: 0.05,
      metalness: 0.05,
      ior: 1.6
    });
    const prismMesh = new THREE.Mesh(prismGeo, prismMat);
    prismMesh.position.y = 1.95;
    prismMesh.rotation.x = Math.PI;
    beaconGroup.add(prismMesh);

    // Floating cryptographic satellite particles
    const particleCount = 28;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const radius = 1.6 + (i % 3) * 0.3;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = 0.5 + (i % 5) * 0.25;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.75
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleSystem);

    renderer.compile(scene, camera);

    // 7. Interactive Pointer Drag & Raycasting
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = true;
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;

        rootGroup.rotation.y += deltaX * 0.008;
        rootGroup.rotation.x = Math.max(-0.4, Math.min(0.4, rootGroup.rotation.x + deltaY * 0.005));
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleClick = () => {
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects([chassisMesh, innerCoreMesh, gimbalRing1, gimbalRing2, beaconMesh], false);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.name) {
          setSelectedPartName(hit.name);
        }
      }
    };

    const domCanvas = renderer.domElement;
    domCanvas.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    domCanvas.addEventListener('click', handleClick);

    // 8. Animation Loop
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);

      const explodedTarget = explodedTargetRef.current;
      currentExplodedRef.current = THREE.MathUtils.damp(
        currentExplodedRef.current,
        explodedTarget,
        6,
        delta
      );
      const expVal = currentExplodedRef.current;

      coreGroup.position.y = THREE.MathUtils.lerp(0, 0.35, expVal);
      beaconGroup.position.y = THREE.MathUtils.lerp(0, 0.8, expVal);
      ringsGroup.position.y = THREE.MathUtils.lerp(0, -0.2, expVal);
      cornerPostsGroup.scale.setScalar(THREE.MathUtils.lerp(1, 1.25, expVal));

      if (autoRotateRef.current && !isDragging) {
        rootGroup.rotation.y += delta * 0.45;
        gimbalRing1.rotation.z += delta * 0.85;
        gimbalRing2.rotation.z -= delta * 0.65;
        innerCoreMesh.rotation.y -= delta * 0.5;
        innerCoreMesh.rotation.x += delta * 0.25;
        particleSystem.rotation.y -= delta * 0.2;
      }

      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCameraPosRef.current.x, 4, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCameraPosRef.current.y, 4, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCameraPosRef.current.z, 4, delta);
      camera.lookAt(cameraLookAt);

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      domCanvas.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      domCanvas.removeEventListener('click', handleClick);

      renderer.dispose();
      chassisGeo.dispose();
      chassisMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      postGeo.dispose();
      postMat.dispose();
      anchorGeo.dispose();
      anchorMat.dispose();
      capGeo.dispose();
      capMat.dispose();
      prismGeo.dispose();
      prismMat.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      shadowPlaneGeo.dispose();
      shadowPlaneMat.dispose();
      shadowTexture.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (container.contains(domCanvas)) {
        container.removeChild(domCanvas);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-[360px] md:h-[420px] rounded-xl overflow-hidden border border-slate-800 bg-[#07090e] ${className}`}>
      {/* 3D Canvas Mount Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Header */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e121b]/95 border border-slate-800 pointer-events-auto shadow-sm">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-semibold text-white">Web3 Ledger Node</span>
          <span className="text-xs text-slate-400 font-mono-code">· {selectedPartName}</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 px-2.5 py-1 rounded bg-[#0e121b]/90 border border-slate-800">
          <span>Click to inspect · Drag to rotate</span>
        </div>
      </div>

      {/* Unified Bottom Control Dock */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 w-[94%] max-w-[560px] transition-transform duration-200 ease-out z-10 ${
          dockCollapsed ? 'translate-y-[calc(100%-24px)]' : 'translate-y-0'
        }`}
      >
        <div className="flex justify-center -mb-px">
          <button
            onClick={() => setDockCollapsed(!dockCollapsed)}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-400 hover:text-slate-200 bg-[#0e121b] border-t border-x border-slate-800 rounded-t-lg transition-colors cursor-pointer"
            aria-label={dockCollapsed ? 'Show 3D controls' : 'Hide 3D controls'}
          >
            {dockCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-blue-400" />
                <span>Show Controls</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                <span>Collapse Dock</span>
              </>
            )}
          </button>
        </div>

        <div className="p-2.5 bg-[#0e121b] border border-slate-800 rounded-xl shadow-xl flex flex-wrap items-center justify-between gap-2">
          {/* View Presets */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveView('isometric')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeView === 'isometric' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
              }`}
            >
              Iso
            </button>
            <button
              onClick={() => setActiveView('top')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeView === 'top' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
              }`}
            >
              Top
            </button>
            <button
              onClick={() => setActiveView('front')}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeView === 'front' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
              }`}
            >
              Front
            </button>
          </div>

          {/* Interactive Feature Toggles */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setExploded(!exploded)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                exploded ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white bg-slate-900 border border-slate-800'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{exploded ? 'Exploded: On' : 'Exploded View'}</span>
            </button>

            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                autoRotate ? 'bg-blue-950 text-blue-300 border border-blue-800' : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{autoRotate ? 'Orbiting' : 'Paused'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
