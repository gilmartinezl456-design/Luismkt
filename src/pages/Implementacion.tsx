import { Link } from 'react-router-dom';
import { Settings, RefreshCcw, FileText, UserPlus, CreditCard } from 'lucide-react';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';

const Implementacion = () => {
  return (
    <div>
      <header className="relative bg-brand-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=1200" 
            alt="Implementación estratégica" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Implementación completa del modelo de ingresos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            No nos quedamos en el papel. Implementamos el modelo diseñado para dejarlo funcionando al 100% en tu negocio real.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10">Qué hacemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <CreditCard />, t: "Cobros automáticos", d: "Configuración de pasarelas y pagos recurrentes." },
              { icon: <Settings />, t: "Integración de servicios", d: "Conexión con tu agenda y herramientas de trabajo." },
              { icon: <FileText />, t: "Documentación", d: "Creación de las normas y reglas de tu nuevo servicio." },
              { icon: <UserPlus />, t: "Migración de clientes", d: "Pasamos a tus clientes actuales al nuevo modelo." },
              { icon: <RefreshCcw />, t: "Activación", d: "Puesta en marcha del sistema de pagos recurrentes." }
            ].map((item, i) => (
              <div key={i} className="card-modern flex flex-col items-center text-center">
                <div className="text-brand-red mb-6 p-4 bg-brand-gray rounded-full">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                <p className="text-gray-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-navy p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6">Resultado</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Un modelo de negocio funcionando con clientes activos, pagos recurrentes automatizados y una estructura sólida que no requiere tu gestión manual constante.
          </p>
        </div>

        <div className="text-center">
          <Link to="/contacto">
            <InteractiveHoverButton text="Hablar con nosotros" className="min-w-64" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Implementacion;
