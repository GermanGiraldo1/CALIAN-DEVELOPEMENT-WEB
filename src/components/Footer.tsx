import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section className="snap-section bg-calian-panel flex flex-col justify-between pt-24 px-6 border-t border-calian-border relative">
      <div className="section-bg-layer bg-[url('https://images.unsplash.com/photo-1635048424329-a9fe69b50db8?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-[0.03]"></div>
      
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <Reveal>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-calian-text tracking-tighter">
            INICIAR PROYECTO
          </h2>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="flex justify-center">
            <button className="premium-btn px-12 py-6 rounded-none font-bold text-sm uppercase tracking-[0.2em] text-calian-text cursor-pointer">
              Agendar conversación
            </button>
          </div>
        </Reveal>
      </div>
      
      <footer className="w-full py-8 border-t border-calian-border flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-[0.2em] text-calian-secondary gap-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center md:text-left">
          <span>&copy; 2026 CALIAN DEVELOPMENT</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-calian-text transition-colors">Privacidad</a>
            <a href="#" className="hover:text-calian-text transition-colors">Términos</a>
          </div>
        </div>
        <div>
          <a href="mailto:hello@calian.com" className="hover:text-calian-text transition-colors">hello@calian.com</a>
        </div>
      </footer>
    </section>
  );
}
