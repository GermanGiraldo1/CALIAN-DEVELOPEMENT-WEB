import { Globe, Cpu, Workflow } from 'lucide-react';
import { Reveal } from './Reveal';

export function Features() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-calian-text" />,
      title: "Desarrollo Web",
      description: "Plataformas digitales diseñadas con precisión arquitectónica y alto rendimiento."
    },
    {
      icon: <Cpu className="w-8 h-8 text-calian-text" />,
      title: "Chatbots Inteligentes",
      description: "Agentes autónomos que operan inventarios y asistencia técnica en tiempo real."
    },
    {
      icon: <Workflow className="w-8 h-8 text-calian-text" />,
      title: "Automatización",
      description: "Ingeniería de procesos para escalar operaciones sin fricción humana."
    }
  ];

  return (
    <section className="snap-section bg-calian-bg px-6 relative">
      <div className="section-bg-layer bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-5"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-16">
          <Reveal>
            <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-calian-secondary mb-4 border-l-2 border-calian-secondary pl-4">Soluciones</h2>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 150} className="h-full">
              <div className="glass-panel p-10 rounded-xl flex flex-col items-start gap-6 h-full transition-all duration-500 hover:scale-[1.02] hover:bg-calian-light hover:border-calian-text/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
                <div className="w-14 h-14 border border-calian-border rounded-xl flex items-center justify-center text-calian-text shrink-0 group-hover:border-calian-text transition-colors duration-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-3 text-calian-text">{feature.title}</h3>
                  <p className="text-sm text-calian-secondary leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
