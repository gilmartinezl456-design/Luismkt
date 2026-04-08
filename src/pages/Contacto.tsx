import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';

const Contacto = () => {
  return (
    <div>
      <header className="relative bg-brand-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
            alt="Contacto" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Hablemos de tu negocio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Invitamos a una conversación inicial para entender tu modelo actual, analizar tu situación y ver si tiene sentido trabajar juntos para rediseñar tu estructura de ingresos.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-brand-navy mb-6">¿Estás listo para la estabilidad?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                El diagnóstico es el primer paso para detectar dónde estás perdiendo dinero y cómo puedes empezar a cobrar de forma recurrente.
              </p>
            </div>

            <div className="space-y-8">
              <a href="mailto:luismkt2026@gmail.com" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-brand-gray flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Email</p>
                  <p className="text-xl font-bold text-brand-navy">luismkt2026@gmail.com</p>
                </div>
              </a>

              <a href="tel:+34652426328" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-brand-gray flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Teléfono</p>
                  <p className="text-xl font-bold text-brand-navy">652426328</p>
                </div>
              </a>

              <a href="https://www.google.com/maps/search/?api=1&query=Mérida,+España" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-brand-gray flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Ubicación</p>
                  <p className="text-xl font-bold text-brand-navy">Mérida, España</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-brand-navy p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Solicita tu diagnóstico</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Realiza nuestro análisis clínico de negocio para obtener una hoja de ruta personalizada hacia la estabilidad financiera.
            </p>
            <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
              <InteractiveHoverButton text="Comenzar análisis" className="w-full" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
