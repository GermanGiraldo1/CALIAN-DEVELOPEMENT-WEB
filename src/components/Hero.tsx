import { Reveal } from './Reveal';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="snap-section flex flex-col items-center justify-center px-6 relative">
      <div className="section-bg-layer bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-transparent to-transparent"></div>
      
      <div className="relative z-10 text-center w-full mx-auto flex flex-col items-center">
        <Reveal>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-calian-text drop-shadow-2xl">
            CALIAN
            <br />
            DEVELOPMENT
          </h1>
        </Reveal>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-calian-secondary/50 scroll-hint">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}

