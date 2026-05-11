import React from 'react';
import { motion } from 'motion/react';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { Megaphone, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PublicidadAds = () => {
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="Publicidad Ads" 
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
              <Megaphone className="text-brand-red" size={40} />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs">Publicidad (Ads)</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight text-balance">
              Publicidad para <br/>
              <span className="text-brand-red italic font-light serif">acelerar resultados.</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed text-balance">
              Una vez tienes un sistema claro, la publicidad permite acelerar la entrada de nuevos clientes. No es magia. Es amplificación de lo que ya funciona.
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
                { t: "Velocidad de Captación", d: "Generamos oportunidades de forma mucho más rápida que con métodos orgánicos." },
                { t: "Escalabilidad", d: "Una vez detectamos qué anuncio funciona, podemos aumentar la inversión para captar más clientes." },
                { t: "Control de Demanda", d: "Tú decides cuándo quieres más tráfico y cuándo prefieres pausar para gestionar a tus clientes." }
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
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Nuestra Estrategia</h3>
            <p className="text-brand-navy/70 leading-relaxed mb-10 text-lg text-balance">
              No quemamos dinero en anuncios. Creamos campañas estratégicas que impactan en el momento adecuado a la persona adecuada, optimizando cada euro.
            </p>
            <ul className="space-y-6">
              {[
                "Segmentación Avanzada de Audiencia",
                "Creatividades de Alto Impacto Visual",
                "Copywriting Persuasivo y Directo",
                "Optimización Diaria de Campañas"
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
          <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">¿Encendemos el motor de tu captación?</h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            La publicidad solo funciona si el modelo es sólido. Si lo es, es el mejor combustible para crecer.
          </p>
          <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="inline-block">
            <InteractiveHoverButton text="Solicitar diagnóstico de inversión" className="px-12 py-6 md:text-lg" />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default PublicidadAds;
