import React from 'react';
import { motion } from 'motion/react';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { Globe, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaginaWeb = () => {
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
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200" 
            alt="Página Web" 
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
              <Globe className="text-brand-red" size={40} />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs">Página Web</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight text-balance">
              Web orientada a <br/>
              <span className="text-brand-red italic font-light serif">conversión real.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed text-balance">
              Tu web no es un catálogo. Es tu principal herramienta de ventas. Filtramos, informamos y preparamos al cliente para la compra.
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
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-8 tracking-tight">¿Por qué una web clínica?</h2>
            <div className="space-y-8">
              {[
                { t: "Autoridad Instantánea", d: "Cuando un cliente potencial te busca, lo que ve debe transmitir profesionalidad absoluta." },
                { t: "Filtro Automático", d: "Diseñamos la web para que solo los clientes que encajan con tu perfil den el siguiente paso." },
                { t: "Activo 24/7", d: "Tu web trabaja informando y captando leads mientras tú estás con tus clientes o descansando." }
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
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Nuestra Estructura</h3>
            <p className="text-brand-navy/70 leading-relaxed mb-10 text-lg text-balance">
              No diseñamos webs para que se vean "bonitas". Diseñamos arquitectura de persuasión orientada a que el usuario tome acción.
            </p>
            <ul className="space-y-6">
              {[
                "Arquitectura de Información Estratégica",
                "Copywriting de Ventas (Direct Response)",
                "Optimización de Velocidad y SEO Base",
                "Integración con Sistemas de Captación"
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
          <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">¿Hacemos que tu web venda?</h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Un diseño mediocre cuesta dinero. Un diseño estratégico lo genera.
          </p>
          <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="inline-block">
            <InteractiveHoverButton text="Solicitar diagnóstico web" className="px-12 py-6 md:text-lg" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default PaginaWeb;
