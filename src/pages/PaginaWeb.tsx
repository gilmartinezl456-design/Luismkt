import React from 'react';
import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { Globe, CheckCircle2 } from 'lucide-react';

const PaginaWeb = () => {
  return (
    <div>
      <header className="relative bg-brand-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200" 
            alt="Página Web" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-brand-red" size={32} />
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Página Web</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Web orientada a conversión. <br/>
            <span className="text-brand-red italic">No está para verse bonita. Está para convertir.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Creamos una estructura clara donde el cliente entiende qué haces y cómo puedes ayudarle. Convierte tus visitas en oportunidades reales.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">¿Para qué sirve?</h2>
            <div className="space-y-6">
              {[
                "Explicar tu propuesta de forma clara",
                "Generar confianza",
                "Captar contactos cualificados"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-red mt-1" size={24} />
                  <p className="text-lg text-brand-navy/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-gray p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Nuestra Estructura</h3>
            <p className="text-brand-navy/60 leading-relaxed mb-8">
              Diseñamos webs que guían al usuario hacia la acción. Cada elemento tiene un propósito estratégico.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Arquitectura de Información
              </li>
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Copywriting Persuasivo
              </li>
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Optimización de Velocidad
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

export default PaginaWeb;
