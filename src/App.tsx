/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Features } from './components/Features';
import { TechSection } from './components/TechSection';
import { Vision } from './components/Vision';
import { CTA } from './components/Footer';
import { Scene } from './components/Scene';

export default function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative h-screen w-full bg-mesh overflow-hidden selection:bg-white/20 text-calian-text">
      <Scene eventSource={mainRef} />
      
      <main ref={mainRef} className="snap-container relative z-10 w-full h-full">
        <Hero />
        <Manifesto />
        <Features />
        <TechSection />
        <Vision />
        <CTA />
      </main>
    </div>
  );
}
