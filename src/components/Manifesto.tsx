import { Reveal } from './Reveal';

export function Manifesto() {
  const text1 = "NO HAY MEDIOCRIDAD. NO HAY ESPACIO.";
  
  return (
    <section className="snap-section bg-calian-panel flex flex-col items-center justify-center px-6 overflow-hidden border-y border-calian-border relative">
      <div className="section-bg-layer bg-[url('https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-10"></div>
      
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-12 relative z-10">
        <div className="flex flex-col items-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-black leading-[1.1] tracking-tighter mb-8 flex flex-wrap justify-center gap-x-3 md:gap-x-6">
              {text1}
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
