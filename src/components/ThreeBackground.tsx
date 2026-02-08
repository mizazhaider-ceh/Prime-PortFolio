import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const [particleColor, setParticleColor] = useState('#00e676');
  
  // Get theme color on mount and when theme changes
  useEffect(() => {
    const updateColor = () => {
      const computedStyle = getComputedStyle(document.body);
      const color = computedStyle.getPropertyValue('--color-accent').trim() || '#00e676';
      setParticleColor(color);
    };
    
    updateColor();
    
    // Use MutationObserver to detect theme changes
    const observer = new MutationObserver(updateColor);
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    
    return () => observer.disconnect();
  }, []);
  
  const sphere = useMemo(() => {
    const count = 800;
    const particles = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 25 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      particles[i * 3] = x;
      particles[i * 3 + 1] = y;
      particles[i * 3 + 2] = z;
    }
    return particles;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={particleColor}
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    // Only render Three.js on devices with width > 768px for performance
    const checkDevice = () => {
      setShouldRender(window.innerWidth > 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  // Don't render heavy Three.js on mobile devices
  if (!shouldRender) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] opacity-50" />
    );
  }
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
