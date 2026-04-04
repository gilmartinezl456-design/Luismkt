import React from 'react';
import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { Brain, CheckCircle2 } from 'lucide-react';

const MarketingEstrategico = () => {
  return (
    <div>
      <header className="relative bg-brand-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
            alt="Marketing Estratégico" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-brand-red" size={32} />
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Marketing Estratégico</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            No se trata de publicar más. <br/>
            <span className="text-brand-red italic">Se trata de comunicar mejor.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Definimos el mensaje adecuado para que atraigas clientes que encajan con tu modelo de negocio y estén dispuestos a pagar por él.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">¿Para qué sirve?</h2>
            <div className="space-y-6">
              {[
                "Posicionarte como profesional sólido",
                "Atraer clientes adecuados",
                "Dejar de depender del boca a boca"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-brand-red mt-1" size={24} />
                  <p className="text-lg text-brand-navy/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-gray p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Nuestra Metodología</h3>
            <p className="text-brand-navy/60 leading-relaxed mb-8">
              Analizamos tu propuesta de valor y la transformamos en un mensaje que resuene con tu cliente ideal. No buscamos likes, buscamos clientes cualificados.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Análisis de Cliente Ideal
              </li>
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Definición de Propuesta Única
              </li>
              <li className="flex items-center gap-3 font-bold text-brand-navy">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                Estrategia de Contenidos con Propósito
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

export default MarketingEstrategico;
