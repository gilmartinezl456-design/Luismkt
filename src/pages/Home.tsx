import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Megaphone, Settings, User, Star, Building2, CheckCircle2 } from 'lucide-react';
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
            src="https://enlizboqeqximxogepig.supabase.co/storage/v1/object/sign/LuisMKT%20sin%20marco/imagen%20sin%20marco%20LuisMKT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NWNhYTVkMy00MTc0LTQ4MDMtYThkMy0xODkxYzMzYTRmOGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMdWlzTUtUIHNpbiBtYXJjby9pbWFnZW4gc2luIG1hcmNvIEx1aXNNS1QucG5nIiwiaWF0IjoxNzczODU1MzE0LCJleHAiOjE4MDUzOTEzMTR9.f1sDM8SniDW_d51TfctcxqUQQvK3xa_1qNm3ySgEEdY" 
            alt="Luis MKT" 
            className="w-full h-full object-cover grayscale brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>

        <WaveBackground className="h-full flex items-center bg-transparent!">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-brand-red"></div>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Estrategia de Negocio</span>
              </div>
              <h1 className="text-6xl lg:text-9xl font-bold text-white leading-[0.85] mb-10 tracking-tighter">
                Agenda llena <br/>
                <span className="text-brand-red italic serif font-light">no es</span> <br/>
                Negocio estable.
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-xl">
                Muchos entrenadores trabajan más cada año, pero su negocio sigue dependiendo de vender sesiones constantemente. Transformamos tu esfuerzo en una estructura sólida.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/diagnostico">
                  <InteractiveHoverButton text="Solicitar diagnóstico" className="w-full sm:w-auto" />
                </Link>
                <Link to="/sobre-nosotros" className="group flex items-center gap-3 font-bold uppercase tracking-widest text-sm text-white hover:text-brand-red transition-colors">
                  Nuestro Método <div className="w-8 h-[2px] bg-white group-hover:bg-brand-red transition-colors"></div>
                </Link>
              </div>
            </motion.div>
          </div>
        </WaveBackground>
      </section>

      {/* 2. EL PROBLEMA - BENTO STYLE */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-brand-navy p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              El problema no es tu agenda. <br />
              <span className="text-brand-red">Es el modelo.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Trabajar muchas horas sin estabilidad es el síntoma de un modelo frágil. La dependencia de la venta constante genera una vulnerabilidad financiera extrema.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { t: "Fragilidad", d: "Si un cliente se va, tus ingresos caen hoy." },
                { t: "Agotamiento", d: "Vendes tiempo, y el tiempo es finito." }
              ].map((item, i) => (
                <div key={i} className="border-l border-brand-red/50 pl-6">
                  <h4 className="font-bold text-brand-red uppercase tracking-widest text-xs mb-2">{item.t}</h4>
                  <p className="text-sm text-gray-300">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-rows-2 gap-8">
            <div className="bg-brand-gray overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800" 
                alt="Esfuerzo" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-brand-red p-12 flex flex-col justify-center text-white">
              <p className="text-3xl font-bold leading-tight">
                "No es falta de esfuerzo, es falta de estructura."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NUESTRA SOLUCIÓN - REFINED CARDS */}
      <section className="bg-brand-gray/50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-bold text-brand-navy mb-6">Sistemas de Alto Rendimiento</h2>
              <p className="text-xl text-brand-navy/60">Transformamos la fragilidad en una estructura de negocio sólida y predecible.</p>
            </div>
            <Link to="/diagnostico" className="text-brand-red font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:gap-4 transition-all">
              Ver todos los servicios <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              { icon: <TrendingUp size={32} />, t: "Ingresos Estables", d: "Pasar de vender sesiones sueltas a operar con una base de ingresos recurrentes." },
              { icon: <Megaphone size={32} />, t: "Captación Predecible", d: "Generar conversaciones de venta semanales con clientes cualificados sin depender del azar." },
              { icon: <Settings size={32} />, t: "Implementación Real", d: "Configuración de cobros automáticos y migración de clientes al nuevo sistema." }
            ].map((item, i) => (
              <div key={i} className="card-modern">
                <div className="text-brand-red mb-8">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{item.t}</h3>
                <p className="text-brand-navy/60 leading-relaxed mb-8">{item.d}</p>
                <Link to="/diagnostico" className="text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-red transition-colors flex items-center gap-2">
                  Saber más <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARA QUIÉN ES - EDITORIAL GRID */}
      <section className="section-padding">
        <div className="text-center mb-24">
          <span className="text-brand-red font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Perfiles de Éxito</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-navy">Para quién es este cambio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", t: "Agenda Llena", d: "Entrenadores que trabajan muchas horas pero sienten que el negocio depende de su presencia física constante." },
            { img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155", t: "Perfil Premium", d: "Profesionales con pocos clientes de alto valor que necesitan diversificar el riesgo de dependencia." },
            { img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f", t: "Dueños de Centros", d: "Estudios pequeños con gastos fijos que requieren una previsibilidad absoluta en su flujo de caja." }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="relative mb-10 overflow-hidden aspect-[3/4]">
                <img 
                  src={`${item.img}?auto=format&fit=crop&q=80&w=600`} 
                  alt={item.t} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-700"></div>
              </div>
              <h4 className="font-bold text-2xl mb-4">{item.t}</h4>
              <p className="text-brand-navy/60 leading-relaxed">
                {item.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA FINAL - WAVE BACKGROUND */}
      <WaveBackground className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-8xl font-bold text-white mb-12 leading-[0.9]">
              ¿Hablamos de <br/>
              <span className="text-brand-red">tu estabilidad?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
              El primer paso es un diagnóstico real. Analizamos tus números para evaluar si tiene sentido trabajar juntos.
            </p>
            <Link to="/diagnostico">
              <InteractiveHoverButton text="Solicitar diagnóstico gratuito" className="w-full sm:w-auto" />
            </Link>
          </motion.div>
        </div>
      </WaveBackground>
    </div>
  );
};

export default Home;
