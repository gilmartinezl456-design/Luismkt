import React from 'react';
import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { Megaphone, CheckCircle2 } from 'lucide-react';

const PublicidadAds = () => {
  return (
    <div>
      <header className="relative bg-brand-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="Publicidad Ads" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="text-brand-red" size={32} />
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Publicidad (Ads)</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Publicidad para acelerar resultados. <br/>
            <span className="text-brand-red italic">No es magia. Es amplificación.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Una vez tienes un sistema claro, la publicidad permite acelerar la entrada de nuevos clientes. Amplificamos lo que ya funciona.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">¿Para qué sirve?</h2>
            <div className="space-y-6">
              {[
                "Generar oportunidades de forma más rápida",
                "Escalar tu captación de clientes",
                "Tener mayor control sobre la demanda"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-red mt-1" size={24} />
                  <p className="text-lg text-brand-navy/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-gray p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Nuestra Estrategia</h3>
            <p className="text-brand-navy/60 leading-relaxed mb-8">
              No quemamos dinero en anuncios. Creamos campañas estratégicas que impactan en el momento adecuado a la persona adecuada.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Segmentación de Audiencia
              </li>
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Creatividades de Alto Impacto
              </li>
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Optimización de Conversión
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer">
            <InteractiveHoverButton text="Solicitar diagnóstico" className="min-w-64" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default PublicidadAds;
