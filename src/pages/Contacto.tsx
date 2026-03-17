import { Link } from 'react-router-dom';
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
        <div className="max-w-3xl mx-auto bg-white border border-brand-gray p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-brand-navy mb-8">¿Estás listo para la estabilidad?</h2>
          <p className="text-lg text-gray-600 mb-12">
            El diagnóstico es el primer paso para detectar dónde estás perdiendo dinero y cómo puedes empezar a cobrar de forma recurrente.
          </p>
          <Link to="/diagnostico">
            <InteractiveHoverButton text="Solicitar diagnóstico" className="min-w-64" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
