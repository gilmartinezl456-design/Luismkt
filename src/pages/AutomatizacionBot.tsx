import React from 'react';
import { motion } from 'motion/react';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { Bot, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AutomatizacionBot = () => {
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
            src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200" 
            alt="Automatización Bot" 
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
              <Bot className="text-brand-red" size={40} />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs">Automatización (Bot)</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight text-balance">
              Sistemas de <br/>
              <span className="text-brand-red italic font-light serif">respuesta instantánea.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed text-balance">
              No dejes que un cliente potencial se enfríe. Implementamos sistemas que responden, filtran y organizan tus leads 24/7 sin que tú muevas un dedo.
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
                { t: "Cero Fugas", d: "Atendemos a cada persona que escribe al instante, evitando que se vaya a la competencia." },
                { t: "Ahorro de Tiempo", d: "El bot hace las preguntas de cualificación por ti, ahorrándote horas de chats irrelevantes." },
                { t: "Cualificación", d: "Llegas a la conversación con el cliente sabiendo exactamente qué necesita y si puedes ayudarle." }
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
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Nuestros Sistemas</h3>
            <p className="text-brand-navy/70 leading-relaxed mb-10 text-lg text-balance">
              Diseñamos flujos de conversación naturales y efectivos que recogen la información necesaria antes de que tú intervengas.
            </p>
            <ul className="space-y-6">
              {[
                "Bots de WhatsApp con IA y Árboles de Decisión",
                "Filtrado Automático de Formularios",
                "Integración en Tiempo Real con tu Agenda",
                "Notificaciones Instantáneas a tu Dispositivo"
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
          <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">¿Quieres que tu negocio no descanse?</h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            La automatización no quita el trato humano, lo hace más eficiente y valioso.
          </p>
          <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="inline-block">
            <InteractiveHoverButton text="Solicitar diagnóstico de automatización" className="px-12 py-6 md:text-lg" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default AutomatizacionBot;
