import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

function CameraController() {
  const { camera } = useThree();
  const scrollData = useRef({ progress: 0 });

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      // Calculate scroll progress from 0 to 1
      const progress = target.scrollTop / (target.scrollHeight - target.clientHeight);
      scrollData.current.progress = isNaN(progress) ? 0 : progress;
    };

    const container = document.querySelector('.snap-container');
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useFrame((state) => {
    const progress = scrollData.current.progress;
    // Map progress 0-1 to previous GSAP values
    // z: 5 to -10 -> 5 + progress * -15
    // y: 0 to -2 -> progress * -2
    // rotX: 0 to 0.15 -> progress * 0.15
    
    const targetZ = 5 + (progress * -15);
    const targetY = progress * -2;
    const rotX = progress * 0.15;
    
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    const finalX = mouseX * 1.5;
    const finalY = targetY + mouseY * 1.5;
    const finalZ = targetZ;
    camera.position.lerp(new THREE.Vector3(finalX, finalY, finalZ), 0.04);
    
    const targetQuat = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(rotX + mouseY * -0.1, mouseX * -0.1, 0)
    );
    camera.quaternion.slerp(targetQuat, 0.04);
  });
  
  return null;
}

function InteractiveParticles() {
  const count = 1500;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { pointer, camera } = useThree();

  const particlesData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 40;
      const z = (Math.random() - 0.5) * 40;
      data.push({
        baseX: x,
        baseY: y,
        baseZ: z,
        x, y, z,
        factor: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.01 + 0.005,
      });
    }
    return data;
  }, [count]);

  const colors = useMemo(() => {
    const array = new Float32Array(count * 3);
    const colorObj = new THREE.Color();
    for (let i = 0; i < count; i++) {
      if (Math.random() > 0.8) {
        colorObj.setHex(0xFFFFFF);
      } else {
        colorObj.setHex(0x555555);
      }
      colorObj.toArray(array, i * 3);
    }
    return array;
  }, [count]);

  const mouse3D = new THREE.Vector3();
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

  useFrame(() => {
    if (!mesh.current) return;
    raycaster.setFromCamera(pointer, camera);
    raycaster.ray.intersectPlane(plane, mouse3D);

    particlesData.forEach((p, i) => {
      const time = performance.now() * p.speed;
      let targetX = p.baseX + Math.sin(time) * p.factor;
      let targetY = p.baseY + Math.cos(time) * p.factor;
      let targetZ = p.baseZ + Math.sin(time * 0.5) * p.factor;

      if (mouse3D) {
        const dx = targetX - mouse3D.x;
        const dy = targetY - mouse3D.y;
        const dz = targetZ - mouse3D.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (dist < 3) {
          const force = (3 - dist) / 3;
          targetX += (dx / dist) * force * 1.5;
          targetY += (dy / dist) * force * 1.5;
          targetZ += (dz / dist) * force * 1.5;
        }
      }

      p.x += (targetX - p.x) * 0.05;
      p.y += (targetY - p.y) * 0.05;
      p.z += (targetZ - p.z) * 0.05;

      dummy.position.set(p.x, p.y, p.z);
      const scale = 1 + Math.sin(time * 2) * 0.2;
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <circleGeometry args={[0.04, 8]}>
        <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
      </circleGeometry>
      <meshBasicMaterial 
        vertexColors
        transparent 
        opacity={0.3} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 - 2;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 32]} position={[4, -2, -6]}>
      <MeshDistortMaterial
        color="#111111"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.8}
      />
    </Icosahedron>
  );
}

export function Scene({ eventSource }: { eventSource: React.RefObject<HTMLElement | null> }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas eventSource={eventSource} eventPrefix="client" camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <CameraController />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#555555" />
        
        <InteractiveParticles />
        <FloatingShape />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
