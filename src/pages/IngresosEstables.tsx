import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';

const IngresosEstables = () => {
  return (
    <div>
      <header className="relative bg-brand-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
            alt="Finanzas estables" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Sistema de ingresos mensuales estables para entrenadores
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Diseñamos un modelo para entrenadores sin previsibilidad en sus ingresos, permitiéndoles operar con una base mensual estable y segura.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10">Qué hacemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Radiografía real", d: "Análisis profundo del flujo de dinero actual." },
              { t: "Estandarización", d: "Unificamos tu oferta para que sea escalable." },
              { t: "Precios sostenibles", d: "Calculamos precios que aseguren tu rentabilidad." },
              { t: "Modelo mensual", d: "Diseño del sistema de suscripción o recurrencia." },
              { t: "Sistema de cobro", d: "Automatización de la entrada de capital." },
              { t: "Plan de comunicación", d: "Cómo presentar el cambio a tus clientes." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-4xl font-bold text-brand-red/20">{i + 1}</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                  <p className="text-gray-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-navy p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6">Resultado</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Un modelo de negocio mucho más claro, estable y significativamente menos dependiente de la venta de sesiones individuales o bonos que caducan.
          </p>
        </div>

        <div className="text-center">
          <Link to="/contacto">
            <InteractiveHoverButton text="Solicitar información" className="min-w-64" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IngresosEstables;
