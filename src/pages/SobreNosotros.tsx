import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Users, Target } from 'lucide-react';

const SobreNosotros = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="bg-brand-gray/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-48 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-brand-red"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Propósito</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-brand-navy mb-12 leading-[0.95] tracking-tighter">
              Por qué <br/> <span className="text-brand-red italic">hacemos esto</span>
            </h1>
            <div className="space-y-8 text-lg md:text-xl text-brand-navy/80 leading-relaxed text-balance">
              <p>
                Muchos entrenadores personales son excelentes profesionales, pero se encuentran atrapados en un modelo de negocio que les exige trabajar cada vez más horas para mantener sus ingresos.
              </p>
              <p className="font-bold border-l-4 border-brand-red pl-6 text-brand-navy">
                El problema no es la falta de clientes, sino el modelo de ingresos basado en la venta de sesiones individuales.
              </p>
              <p>
                Nuestra misión es rediseñar ese modelo. No buscamos que trabajes más, sino que tu trabajo sea más estable, sostenible y rentable a largo plazo.
              </p>
              <p>
                Ayudamos a convertir la pasión por el entrenamiento en un negocio sólido, con ingresos predecibles y una estructura que te permita tener el control real de tu tiempo y tu futuro financiero.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden shadow-2xl">
              <img 
                src="https://enlizboqeqximxogepig.supabase.co/storage/v1/object/sign/LuisMKT%20sin%20marco/imagen%20sin%20marco%20LuisMKT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NWNhYTVkMy00MTc0LTQ4MDMtYThkMy0xODkxYzMzYTRmOGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMdWlzTUtUIHNpbiBtYXJjby9pbWFnZW4gc2luIG1hcmNvIEx1aXNNS1QucG5nIiwiaWF0IjoxNzczODU1MzE0LCJleHAiOjE4MDUzOTEzMTR9.f1sDM8SniDW_d51TfctcxqUQQvK3xa_1qNm3ySgEEdY" 
                alt="Luis MKT Vision" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-navy/10"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-red/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <TrendingUp size={32} />, t: "Rentabilidad", d: "Optimizamos tus procesos para que cada hora trabajada rinda mucho más que antes." },
            { icon: <Users size={32} />, t: "Libertad", d: "Construimos sistemas que te permiten desconectar sin que tus ingresos se detengan." },
            { icon: <Target size={32} />, t: "Foco", d: "Te ayudamos a centrarte en lo que mejor sabes hacer: cambiar las vidas de tus clientes." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 bg-brand-gray/50 hover:bg-white border border-brand-gray hover:border-brand-red/20 transition-all duration-500 hover:shadow-premium group"
            >
              <div className="text-brand-red mb-6 transition-transform group-hover:scale-110">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{item.t}</h3>
              <p className="text-brand-navy/60 leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
