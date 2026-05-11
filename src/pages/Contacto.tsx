import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';
import { motion } from 'motion/react';

const Contacto = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">
      <header className="relative bg-brand-navy py-32 lg:py-48 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
            alt="Contacto" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
              Hablemos de <br/> <span className="text-brand-red italic">tu negocio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed text-balance">
              Invitamos a una conversación inicial para entender tu modelo actual, analizar tu situación y ver si tiene sentido trabajar juntos para rediseñar tu estructura de ingresos.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-navy to-transparent pointer-events-none"></div>
      </header>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">¿Estás listo para la estabilidad?</motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed max-w-xl">
                El diagnóstico es el primer paso para detectar dónde estás perdiendo dinero y cómo puedes empezar a cobrar de forma recurrente.
              </motion.p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail size={24} />, label: "Email", value: "luismkt2026@gmail.com", href: "mailto:luismkt2026@gmail.com" },
                { icon: <Phone size={24} />, label: "Teléfono", value: "652426328", href: "tel:+34652426328" },
                { icon: <MapPin size={24} />, label: "Ubicación", value: "Mérida, España", href: "https://www.google.com/maps/search/?api=1&query=Mérida,+España" }
              ].map((item, i) => (
                <motion.a 
                  key={i}
                  variants={itemVariants}
                  href={item.href} 
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 p-4 border border-transparent hover:border-brand-gray hover:bg-brand-gray/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-brand-gray flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all rounded-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-1">{item.label}</p>
                    <p className="text-lg md:text-xl font-bold text-brand-navy group-hover:translate-x-1 transition-transform">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-navy p-10 md:p-16 text-white relative lg:sticky lg:top-32 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-brand-red"></div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Solicita tu diagnóstico</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Realiza nuestro análisis clínico de negocio para obtener una hoja de ruta personalizada hacia la estabilidad financiera. No es una llamada de ventas, es una auditoría.
            </p>
            <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="block">
              <InteractiveHoverButton text="Comenzar análisis gratuito" className="w-full py-6 md:text-lg" />
            </a>
            <div className="mt-8 flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest font-bold">
              <div className="w-4 h-[1px] bg-gray-500"></div>
              <span>Sin compromiso</span>
              <div className="w-4 h-[1px] bg-gray-500"></div>
              <span>Evaluación 1-on-1</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
