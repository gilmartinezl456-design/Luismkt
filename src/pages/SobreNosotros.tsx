import React from 'react';

const SobreNosotros = () => {
  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-brand-navy mb-12 leading-tight">
            Por qué hacemos esto
          </h1>
          <div className="space-y-8 text-xl text-brand-navy leading-relaxed">
            <p>
              Muchos entrenadores personales son excelentes profesionales, pero se encuentran atrapados en un modelo de negocio que les exige trabajar cada vez más horas para mantener sus ingresos.
            </p>
            <p className="font-bold border-l-4 border-brand-red pl-6">
              El problema no es la falta de clientes, sino el modelo de ingresos basado en la venta de sesiones individuales.
            </p>
            <p>
              Nuestra misión es rediseñar ese modelo. No buscamos que trabajes más, sino que tu trabajo sea más estable, sostenible y rentable a largo plazo.
            </p>
            <p>
              Ayudamos a convertir la pasión por el entrenamiento en un negocio sólido, con ingresos predecibles y una estructura que te permita tener el control real de tu tiempo y tu futuro financiero.
            </p>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
            alt="Equipo de consultoría" 
            className="w-full h-[600px] object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-red -z-10"></div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
