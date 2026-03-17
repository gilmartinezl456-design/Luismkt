import React from 'react';
import { CheckCircle2, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from '@/src/components/ui/interactive-hover-button';

const Diagnostico = () => {
  return (
    <div>
      <header className="relative bg-brand-navy py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="Análisis de datos" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Diagnóstico de ingresos y precios para entrenadores personales
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Entiende la falta de constancia en tus ingresos analizando tu modelo actual. Detectamos errores invisibles en tus precios, servicios y métodos de cobro que están frenando tu crecimiento.
          </p>
        </div>
      </header>

      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card-modern">
            <div className="flex items-center gap-4 mb-8">
              <BarChart3 className="text-brand-red" size={32} />
              <h2 className="text-2xl font-bold">Qué analizamos</h2>
            </div>
            <ul className="space-y-6">
              {[
                "Cómo cobras actualmente (métodos y tiempos)",
                "Ingresos reales vs. horas trabajadas",
                "Rentabilidad real de cada uno de tus servicios",
                "Fugas de dinero y clientes",
                "Potencial de estructura estable"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-modern">
            <div className="flex items-center gap-4 mb-8">
              <Target className="text-brand-red" size={32} />
              <h2 className="text-2xl font-bold">Resultado</h2>
            </div>
            <ul className="space-y-6">
              {[
                "Claridad absoluta sobre qué cambiar hoy mismo",
                "Identificación de servicios a mantener o eliminar",
                "Hoja de ruta para una estructura de ingresos previsibles",
                "Optimización inmediata de tu política de precios",
                "Plan de acción personalizado"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-red mt-1 flex-shrink-0" size={20} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link to="/contacto">
            <InteractiveHoverButton text="Solicitar diagnóstico ahora" className="min-w-64" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Diagnostico;
