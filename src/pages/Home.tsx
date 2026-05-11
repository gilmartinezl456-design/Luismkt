import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Megaphone, Settings, User, Star, Building2, CheckCircle2, Brain, Globe, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { WaveBackground } from '@/src/components/ui/wave-background';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION - FULL SCREEN IMAGE */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000" 
            alt="Entrenamiento de Alto Rendimiento" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent"></div>
        </div>

        <WaveBackground className="h-full flex items-center bg-transparent!">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-12 h-[2px] bg-brand-red"></div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Estrategia de Negocio</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-[0.85] mb-10 tracking-tighter"
              >
                Agenda llena <br/>
                <span className="text-brand-red italic serif font-light">no es</span> <br/>
                Negocio estable.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-xl"
              >
                Muchos entrenadores trabajan más cada año, pero su negocio sigue dependiendo de vender sesiones constantemente. Transformamos tu esfuerzo en una estructura sólida.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer">
                  <InteractiveHoverButton text="Solicitar diagnóstico" className="w-full sm:w-auto" />
                </a>
                <Link to="/sobre-nosotros" className="group flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-white hover:text-brand-red transition-colors">
                  Nuestro Método <div className="w-8 h-[2px] bg-white group-hover:bg-brand-red transition-colors"></div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </WaveBackground>
      </section>

      {/* 2. EL PROBLEMA - BENTO STYLE */}
      <section className="section-padding overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-brand-navy p-8 md:p-16 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-8">
              El problema no es tu agenda. <br />
              <span className="text-brand-red underline decoration-1 underline-offset-8">Es el modelo.</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-10">
              Trabajar muchas horas sin estabilidad es el síntoma de un modelo frágil. La dependencia de la venta constante genera una vulnerabilidad financiera extrema.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { t: "Fragilidad", d: "Si un cliente se va, tus ingresos caen hoy." },
                { t: "Agotamiento", d: "Vendes tiempo, y el tiempo es finito." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.2) }}
                  className="border-l border-brand-red/50 pl-6"
                >
                  <h4 className="font-bold text-brand-red uppercase tracking-widest text-xs mb-2">{item.t}</h4>
                  <p className="text-sm text-gray-300">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-rows-2 gap-8"
          >
            <div className="bg-brand-gray overflow-hidden relative group aspect-square lg:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800" 
                alt="Personal Trainer Focus" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-brand-red p-10 md:p-12 flex flex-col justify-center text-white relative group cursor-default">
              <span className="absolute top-6 left-6 text-6xl font-serif opacity-20">"</span>
              <p className="text-2xl md:text-3xl font-bold leading-tight relative z-10 transition-transform group-hover:translate-x-2">
                "No es falta de esfuerzo, es falta de estructura."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-gray py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">Servicios para escalar</h2>
              <p className="text-lg md:text-xl text-brand-navy/60">Una vez tu modelo está bien estructurado, estos sistemas te ayudan a crecer con más control, eficiencia y menos carga operativa.</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: <Brain size={28} />, t: "Marketing estratégico", d: "Definimos el mensaje adecuado para que atraigas clientes que encajan con tu modelo y estén dispuestos a pagar por él.", path: "/servicios/marketing-estrategico" },
              { icon: <Megaphone size={28} />, t: "Publicidad (Ads)", d: "Una vez tienes un sistema claro, la publicidad permite acelerar la entrada de nuevos clientes. Es amplificación.", path: "/servicios/publicidad-ads" },
              { icon: <Globe size={28} />, t: "Página Web", d: "Tu web no está para 'verse bonita'. Está para convertir visitas en oportunidades reales con una estructura clara.", path: "/servicios/pagina-web" },
              { icon: <Bot size={28} />, t: "Automatización (Bot)", d: "Implementamos sistemas que responden, filtran y organizan los contactos automáticamente para no perder oportunidades.", path: "/servicios/automatizacion-bot" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-modern group"
              >
                <div className="text-brand-red mb-6 transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4">{item.t}</h3>
                <p className="text-sm lg:text-base text-brand-navy/60 leading-relaxed mb-8 h-24 overflow-hidden">{item.d}</p>
                <Link to={item.path} className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-brand-navy hover:text-brand-red transition-colors flex items-center gap-2 mt-auto">
                  Saber más <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* BLOQUE FINAL - POSICIONAMIENTO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 md:mt-32 bg-brand-navy p-8 md:p-16 lg:p-20 text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
              <TrendingUp size={300} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-brand-red"></div>
                <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs block">La Base del Éxito</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">Primero la base, luego el crecimiento</h3>
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                Estos servicios digitales son amplificadores. Antes de activarlos, nos aseguramos de que tu negocio tenga:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {[
                  "Ingresos estables",
                  "Estructura clara",
                  "Control del negocio"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-3 bg-white/5 p-5 border border-white/10 hover:border-brand-red/30 transition-colors"
                  >
                    <CheckCircle2 className="text-brand-red flex-shrink-0" size={18} />
                    <span className="font-bold text-[11px] md:text-xs lg:text-sm uppercase tracking-wider">{item}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-10 text-gray-400 italic text-sm">
                * El crecimiento sin estructura solo escala el caos. Construimos sobre roca, no sobre arena.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PARA QUIÉN ES - EDITORIAL GRID */}
      <section className="section-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block">Perfiles de Éxito</span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-brand-navy">Para quién es este cambio</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {[
            { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", t: "Agenda Llena", d: "Entrenadores que trabajan muchas horas pero sienten que el negocio depende de su presencia física constante." },
            { img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155", t: "Perfil Premium", d: "Profesionales con pocos clientes de alto valor que necesitan diversificar el riesgo de dependencia." },
            { img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f", t: "Dueños de Centros", d: "Estudios pequeños con gastos fijos que requieren una previsibilidad absoluta en su flujo de caja." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative mb-8 md:mb-10 overflow-hidden aspect-[3/4] shadow-xl">
                <img 
                  src={`${item.img}?auto=format&fit=crop&q=80&w=600`} 
                  alt={item.t} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply group-hover:bg-brand-navy/10 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-brand-red px-3 py-1">Identificado</span>
                </div>
              </div>
              <h4 className="font-bold text-xl md:text-2xl mb-4 group-hover:text-brand-red transition-colors">{item.t}</h4>
              <p className="text-brand-navy/70 leading-relaxed text-sm md:text-base">
                {item.d}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. CTA FINAL - WAVE BACKGROUND */}
      <section className="relative py-24 md:py-32 lg:py-48 overflow-hidden bg-brand-navy">
        <WaveBackground className="flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-10 md:mb-12 leading-[1] tracking-tighter">
                ¿Hablamos de <br/>
                <span className="text-brand-red animate-pulse">tu estabilidad?</span>
              </h2>
              <p className="text-lg md:text-xl md:text-2xl text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto text-balance">
                El primer paso es un diagnóstico real. Sin compromiso. Analizamos tus números para evaluar si tiene sentido que trabajemos juntos.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer">
                  <InteractiveHoverButton text="Solicitar diagnóstico gratuito" className="py-6 px-12 md:text-lg" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </WaveBackground>
        
        {/* Abstract background element */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-red opacity-10 rounded-full blur-[120px]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-[120px]"></div>
      </section>
    </div>
  );
};

export default Home;
