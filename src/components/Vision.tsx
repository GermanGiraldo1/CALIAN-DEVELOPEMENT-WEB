import { Reveal } from './Reveal';

export function Vision() {
  const text = "Para 2030, posicionar a Calian en la vanguardia del ecosistema empresarial, dominando el mercado mediante innovación disruptiva y soluciones de máxima eficiencia.";
  
  return (
    <section className="snap-section bg-calian-bg px-6 flex items-center justify-center text-center relative">
      <div className="section-bg-layer bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-[0.03]"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        <Reveal delay={100}>
          <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-calian-secondary mb-12 uppercase">Visión 2030</p>
        </Reveal>
        
        <Reveal delay={300}>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-calian-text">
            {text.split(" ").map((word, wIdx) => {
              const isHighlight = ["vanguardia", "dominando"].includes(word.toLowerCase().replace(/[.,]/g, ''));
              return (
                <span key={wIdx} className={`inline-block mr-2 ${isHighlight ? 'font-bold' : ''}`}>
                  {word}
                </span>
              );
            })}
          </h3>
        </Reveal>
      </div>
    </section>
  );
}
