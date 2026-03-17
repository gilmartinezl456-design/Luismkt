import { Link } from 'react-router-dom';
import { Search, MessageSquare, Users, Zap, Target } from 'lucide-react';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';

const CaptacionPredecible = () => {
  return (
    <div>
      <header className="relative bg-brand-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" 
            alt="Captación de clientes" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Sistema de captación de clientes predecible
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Deja de depender solo del boca a boca. Este sistema genera conversaciones de venta semanales con clientes cualificados de forma constante.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10">Qué hacemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target />, t: "Cliente ideal", d: "Definimos exactamente a quién quieres atraer." },
              { icon: <MessageSquare />, t: "Mensaje central", d: "Creamos una propuesta de valor irresistible." },
              { icon: <Search />, t: "Elección de canal", d: "Identificamos dónde está tu cliente y cómo llegar." },
              { icon: <Users />, t: "Scripts de venta", d: "Guiones para convertir interesados en clientes." },
              { icon: <Zap />, t: "Rutina semanal", d: "Un plan de acción claro para captar sin agobios." }
            ].map((item, i) => (
              <div key={i} className="card-modern">
                <div className="text-brand-red mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.t}</h4>
                <p className="text-gray-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-navy p-12 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6">Resultado</h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Un flujo constante y controlado de conversaciones con posibles clientes, eliminando la incertidumbre de no saber de dónde vendrá el próximo ingreso.
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

export default CaptacionPredecible;
