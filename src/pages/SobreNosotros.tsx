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
            src="https://enlizboqeqximxogepig.supabase.co/storage/v1/object/sign/LuisMKT%20sin%20marco/imagen%20sin%20marco%20LuisMKT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NWNhYTVkMy00MTc0LTQ4MDMtYThkMy0xODkxYzMzYTRmOGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMdWlzTUtUIHNpbiBtYXJjby9pbWFnZW4gc2luIG1hcmNvIEx1aXNNS1QucG5nIiwiaWF0IjoxNzczODU1MzE0LCJleHAiOjE4MDUzOTEzMTR9.f1sDM8SniDW_d51TfctcxqUQQvK3xa_1qNm3ySgEEdY" 
            alt="Luis MKT" 
            className="w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-red -z-10"></div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;
