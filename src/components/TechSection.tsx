import { Reveal } from './Reveal';

export function TechSection() {
  return (
    <section className="snap-section bg-calian-panel px-6 flex items-center border-y border-calian-border relative">
      <div className="section-bg-layer bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-[0.04]"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <Reveal delay={100}>
          <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-calian-secondary mb-8 border-l-2 border-calian-secondary pl-4">Tecnología</h2>
        </Reveal>
        
        <Reveal delay={250}>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight mb-8 text-calian-text max-w-5xl">
            Construimos sobre los lenguajes de programación más estables y eficientes de la industria.
          </h3>
        </Reveal>
        
        <Reveal delay={400}>
          <p className="text-lg md:text-2xl text-calian-secondary leading-relaxed font-light max-w-3xl">
            El rendimiento no es negociable. Diseñamos arquitecturas robustas que garantizan escalabilidad absoluta, estabilidad bajo carga crítica y un código limpio, optimizado para un mantenimiento impecable a largo plazo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
