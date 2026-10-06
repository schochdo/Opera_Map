import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import * as THREE from 'three';
import { PapercraftGlobe } from './components/PapercraftGlobe';
import { OperaUIOverlay } from './components/OperaUIOverlay';
import { useOperaStore } from './store/useOperaStore';
import { latLongToVector3 } from './components/PapercraftLandmark';

const CameraRig: React.FC<{ controlsRef: React.RefObject<OrbitControlsImpl> }> = ({ controlsRef }) => {
  const cameraTarget = useOperaStore((state) => state.cameraTarget);
  const isAnimating = useOperaStore((state) => state.isAnimatingCamera);
  const stopCameraAnimation = useOperaStore((state) => state.stopCameraAnimation);
  const headlightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(({ camera }) => {
    // Keep headlight strictly locked to camera position pointing at the globe center:
    // Guarantees whatever country or hemisphere the user is viewing is ALWAYS in 100% full, radiant daylight
    // Completely eliminates any dark side or "night mode" on the Earth
    if (headlightRef.current) {
      headlightRef.current.position.copy(camera.position);
    }

    // Dynamically scale rotation/pan speed based on zoom distance to prevent high speed when zoomed in
    if (controlsRef.current) {
      // Ensure controls target is strictly locked to center of the globe (0, 0, 0)
      controlsRef.current.target.set(0, 0, 0);

      const dist = camera.position.length();
      // Near surface (dist ~4.5): factor is ~0.2, rotating slow and steady
      // Far surface (dist ~8.5): factor is ~0.9
      const factor = THREE.MathUtils.clamp((dist - 3.2) / 5.5, 0.18, 1.0);
      controlsRef.current.rotateSpeed = 0.38 * factor;
    }

    if (isAnimating) {
      if (controlsRef.current) {
        controlsRef.current.enableDamping = false;
      }

      // Exact unit direction vector pointing to the selected landmark
      const targetDir = latLongToVector3(
        cameraTarget.lat,
        cameraTarget.lng,
        1.0
      ).normalize();

      const currPos = camera.position;
      const currDist = currPos.length();
      const currDir = currPos.clone().normalize();

      const angle = currDir.angleTo(targetDir);
      // Maintain comfortable close inspection viewing zoom between 4.7 and 5.6
      const targetDist = THREE.MathUtils.clamp(currDist, 4.7, 5.6);
      const distDiff = Math.abs(currDist - targetDist);

      if (angle < 0.003 && distDiff < 0.02) {
        camera.position.copy(targetDir.multiplyScalar(targetDist));
        camera.lookAt(0, 0, 0);
        if (controlsRef.current) {
          controlsRef.current.enableDamping = true;
          controlsRef.current.update();
        }
        stopCameraAnimation();
      } else {
        // Spherical great-circle arc rotation around globe (prevents passing through center)
        const q = new THREE.Quaternion().setFromUnitVectors(currDir, targetDir);
        const stepQ = new THREE.Quaternion().slerp(q, 0.075);
        const nextDir = currDir.applyQuaternion(stepQ).normalize();
        const nextDist = THREE.MathUtils.lerp(currDist, targetDist, 0.075);

        camera.position.copy(nextDir.multiplyScalar(nextDist));
        camera.lookAt(0, 0, 0);

        if (controlsRef.current) {
          controlsRef.current.update();
        }
      }
    }
  });

  return (
    <directionalLight
      ref={headlightRef}
      intensity={1.8}
      color="#fffdf8"
    />
  );
};

export const App: React.FC = () => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const stopCameraAnimation = useOperaStore((state) => state.stopCameraAnimation);
  const stopAutoRotate = useOperaStore((state) => state.stopAutoRotate);
  const isAutoRotating = useOperaStore((state) => state.isAutoRotating);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0a101a] font-serif select-none">
      {/* LUMINOUS, REFINED THEATRICAL GALLERY BACKDROP */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 50% 45%, rgba(32, 50, 78, 0.85) 0%, rgba(13, 20, 32, 0.98) 100%)',
        }}
      />

      {/* 3D WEBGL CANVASCENE */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [4.54, 5.20, -1.13], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* RADIANT CARTOGRAPHIC STUDIO LIGHTING RIG — Crisp, Radiant, 100% Even Day Lighting */}
          <ambientLight intensity={1.6} color="#ffffff" />

          {/* Balanced Top Light (Illuminates northern hemisphere) */}
          <directionalLight
            position={[0, 16, 4]}
            intensity={0.9}
            color="#fffcf5"
          />

          {/* Balanced Bottom Fill Light (Illuminates southern hemisphere) */}
          <directionalLight
            position={[0, -16, 4]}
            intensity={0.8}
            color="#fef8eb"
          />

          {/* Balanced East/West Cross-Lights (Eliminates edge shading when spinning) */}
          <directionalLight
            position={[16, 0, -6]}
            intensity={0.7}
            color="#ffffff"
          />
          <directionalLight
            position={[-16, 0, -6]}
            intensity={0.7}
            color="#ffffff"
          />

          {/* 3D Papercraft Globe */}
          <PapercraftGlobe />

          {/* Orbit Controls (Smooth inertia, distance-scaled speed) */}
          <OrbitControls
            ref={controlsRef}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.06}
            minDistance={3.8}
            maxDistance={12}
            rotateSpeed={0.42}
            zoomSpeed={0.55}
            autoRotate={isAutoRotating}
            autoRotateSpeed={0.35}
            onStart={() => {
              stopCameraAnimation();
              stopAutoRotate();
            }}
          />

          <CameraRig controlsRef={controlsRef} />
        </Canvas>
      </div>

      {/* THEATRICAL UI OVERLAY */}
      <OperaUIOverlay />
    </div>
  );
};

export default App;
