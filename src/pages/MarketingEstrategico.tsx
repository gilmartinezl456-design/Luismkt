import React from 'react';
import { motion } from 'motion/react';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { Brain, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketingEstrategico = () => {
  return (
    <div className="overflow-hidden">
      <header className="relative bg-brand-navy py-32 lg:py-48 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
            alt="Marketing Estratégico" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest mb-12 hover:translate-x--1 transition-transform">
            <ArrowLeft size={16} /> Volver al Inicio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Brain className="text-brand-red" size={40} />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs">Marketing Estratégico</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight text-balance">
              No se trata de publicar más. <br/>
              <span className="text-brand-red italic font-light serif">Se trata de comunicar mejor.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed text-balance">
              Definimos el mensaje adecuado para que atraigas clientes que encajan con tu modelo de negocio y estén dispuestos a pagar por él.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="section-padding py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-8 tracking-tight">¿Para qué sirve?</h2>
            <div className="space-y-8">
              {[
                { t: "Posicionamiento Real", d: "Te posicionas como un profesional sólido, no como un creador de contenido más." },
                { t: "Atracción de Calidad", d: "Atraes a clientes que ya entienden tu valor y están listos para invertir." },
                { t: "Independencia", d: "Dejas de depender exclusivamente del boca a boca para tener un flujo constante." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="mt-1 bg-brand-red/10 p-2 rounded-full">
                    <CheckCircle2 className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-brand-navy mb-2">{item.t}</h4>
                    <p className="text-brand-navy/60 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-gray/50 p-10 md:p-16 relative shadow-xl"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-red"></div>
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Nuestra Metodología</h3>
            <p className="text-brand-navy/70 leading-relaxed mb-10 text-lg">
              Analizamos tu propuesta de valor y la transformamos en un mensaje que resuene con tu cliente ideal. No buscamos likes, buscamos clientes cualificados.
            </p>
            <ul className="space-y-6">
              {[
                "Análisis profundo de Cliente Ideal",
                "Definición de Propuesta Única de Venta",
                "Estrategia de Contenidos con Objetivo",
                "Embudo de Mensajería Estratégica"
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-4 font-bold text-brand-navy">
                  <span className="text-brand-red text-xs font-mono">0{i+1}</span>
                  <span className="uppercase tracking-widest text-xs">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-brand-navy py-20 px-6 text-white"
        >
          <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">¿Hacemos una auditoría de tu mensaje?</h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            El primer paso es entender si tu comunicación actual está alejando a tus mejores clientes.
          </p>
          <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="inline-block">
            <InteractiveHoverButton text="Solicitar diagnóstico de marketing" className="px-12 py-6 md:text-lg" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default MarketingEstrategico;
