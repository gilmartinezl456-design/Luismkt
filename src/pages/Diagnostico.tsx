import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, Send, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

type QuestionType = 'text' | 'email' | 'tel' | 'select' | 'number' | 'long-text';

interface Question {
  id: string;
  type: QuestionType;
  question: string;
  placeholder?: string;
  options?: string[];
  description?: string;
}

const questions: Question[] = [
  // Paso 1: Datos de Contacto
  { id: 'nombre', type: 'text', question: '¿Cuál es tu nombre completo?', placeholder: 'Escribe tu respuesta aquí...' },
  { id: 'email', type: 'email', question: 'Tu email profesional', placeholder: 'nombre@ejemplo.com' },
  { id: 'telefono', type: 'tel', question: 'Teléfono de contacto (opcional)', placeholder: '+34 000 000 000' },
  { id: 'estructura', type: 'select', question: '¿Cuál es tu estructura actual?', options: ['Trabajo Solo', 'Tengo un equipo pequeño', 'Soy dueño de un centro/estudio propio'] },
  
  // Paso 2: Contexto y Situación Actual
  { id: 'experiencia', type: 'select', question: 'Experiencia en el sector:', options: ['0–2 años', '3–5 años', '5–10 años', '+10 años'] },
  { id: 'fuente_ingresos', type: 'select', question: 'Fuente principal de ingresos:', options: ['Sesiones individuales', 'Bonos de sesiones', 'Planes mensuales/Suscripción', 'Modelo Mixto'] },
  { id: 'clientes_activos', type: 'number', question: '¿Cuántos clientes activos manejas hoy?', placeholder: '0' },
  { id: 'estado_agenda', type: 'select', question: 'Estado actual de tu agenda:', options: ['Vacía', 'Medio llena', 'Casi llena', 'Totalmente llena (Sin huecos)'] },
  
  // Paso 3: Análisis de Estabilidad
  { id: 'ingresos_estables', type: 'select', question: '¿Son tus ingresos mensuales estables y previsibles?', options: ['Sí', 'Más o menos', 'No, fluctúan mucho'] },
  { id: 'impacto_perdida', type: 'select', question: '¿Qué impacto tiene en tu economía perder 1 o 2 clientes de golpe?', options: ['No afecta mucho', 'Se nota en las cuentas', 'Me afecta bastante', 'Desestabiliza totalmente mi mes'] },
  { id: 'dependencia_presencia', type: 'select', question: '¿Sientes que si no trabajas hoy, no generas ingresos?', options: ['Sí, dependencia total', 'En gran parte', 'No tanto'] },
  { id: 'ingresos_recurrentes', type: 'select', question: '¿Tienes ingresos que entran de forma automática (recurrentes) cada mes?', options: ['Sí', 'Muy pocos', 'No, empiezo de cero cada mes'] },
  
  // Paso 4: Estructura de Negocio
  { id: 'modelo_claro', type: 'select', question: '¿Tienes un modelo claro de ingresos mensuales definido?', options: ['Sí', 'No del todo', 'No'] },
  { id: 'reglas_claras', type: 'select', question: '¿Cuentas con reglas claras de cobro, cancelaciones y compromiso?', options: ['Sí', 'Algunas', 'No'] },
  { id: 'valor_servicio', type: 'select', question: 'Honestamente, ¿sientes que cobras lo que realmente vale tu servicio?', options: ['Sí', 'No estoy seguro', 'No, cobro poco'] },
  
  // Paso 5: Sistema de Ventas
  { id: 'via_captacion', type: 'select', question: '¿Cuál es tu principal vía de captación?', options: ['Boca a boca', 'Redes sociales', 'Referencias', 'Publicidad/Otros'] },
  { id: 'sistema_constante', type: 'select', question: '¿Tienes un sistema que genere clientes nuevos de forma constante cada semana?', options: ['Sí', 'A veces', 'No, dependo de la suerte'] },
  { id: 'conversaciones_venta', type: 'select', question: 'Conversaciones de venta (llamadas/reuniones) por semana:', options: ['0', '1–2', '3–5', '+5'] },
  { id: 'control_clientes', type: 'select', question: '¿Sientes que tienes el control sobre cuántos clientes nuevos entran cada mes?', options: ['Sí', 'No del todo', 'No'] },
  
  // Paso 6: Profundización
  { id: 'mayor_problema', type: 'long-text', question: 'Describe brevemente: ¿Cuál es el mayor problema que enfrentas hoy en tu negocio?', placeholder: 'Escribe aquí...' },
  { id: 'frase_definicion', type: 'select', question: 'Elige la frase que mejor te define:', options: ['Trabajo mucho pero no veo estabilidad', 'Si pierdo clientes, mi negocio tiembla', 'No sé de dónde vendrán los próximos clientes', 'Siento que mi crecimiento está estancado'] },
  { id: 'frustracion_actual', type: 'long-text', question: '¿Qué es lo que más te frustra de tu situación actual?', placeholder: 'Escribe aquí...' },
  
  // Paso 7: Objetivos y Calificación
  { id: 'cambio_90_dias', type: 'long-text', question: '¿Qué cambio específico quieres ver en tu negocio en los próximos 90 días?', placeholder: 'Escribe aquí...' },
  { id: 'resultado_inversion', type: 'long-text', question: '¿Qué resultado te haría sentir que tu inversión ha valido la pena?', placeholder: 'Escribe aquí...' },
  { id: 'disposicion_cambio', type: 'select', question: 'Si tuviéramos la solución, ¿estás dispuesto a cambiar tu modelo de negocio actual?', options: ['Sí, estoy listo', 'Depende del cambio', 'No'] },
  { id: 'nivel_urgencia', type: 'select', question: '¿Cuál es tu nivel de urgencia?', options: ['Solo estoy explorando', 'Quiero cambiar algo pronto', 'Necesito solucionarlo ya mismo'] },
];

const Diagnostico = () => {
  const [currentIndex, setCurrentIndex] = useState(-1); // -1 is intro
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > -1) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[currentIndex];
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    
    // Auto-advance for selects
    if (currentQuestion.type === 'select') {
      setTimeout(handleNext, 300);
    }
  };

  const progress = ((currentIndex + 1) / questions.length) * 100;

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-brand-red" size={40} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">¡Diagnóstico completado!</h2>
          <p className="text-xl text-brand-navy/70 mb-12 leading-relaxed">
            Gracias por tu honestidad. Revisaremos tus respuestas personalmente. Si vemos que podemos ayudarte a estabilizar tus ingresos, te contactaremos para una conversación inicial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="cta-button">
              Volver a la web
            </Link>
            <a 
              href="https://wa.me/34652426328" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-brand-navy text-brand-navy font-bold uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare size={18} /> Contactar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Progress Bar */}
      {currentIndex >= 0 && (
        <div className="fixed top-0 left-0 w-full h-1 bg-brand-gray z-50">
          <motion.div 
            className="h-full bg-brand-red"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="flex-grow flex items-center justify-center p-6 relative">
        <AnimatePresence mode="wait" custom={direction}>
          {currentIndex === -1 ? (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl w-full text-center"
            >
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Análisis Clínico de Negocio</span>
              <h1 className="text-5xl lg:text-7xl font-bold text-brand-navy mb-8 leading-tight">
                Diagnóstico de Estabilidad para Entrenadores
              </h1>
              <p className="text-xl text-brand-navy/60 mb-12 leading-relaxed">
                Este análisis nos permitirá entender la salud financiera de tu negocio y detectar los puntos de fuga que impiden tu crecimiento estable.
              </p>
              <button 
                onClick={handleNext}
                className="cta-button group"
              >
                Comenzar diagnóstico <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <p className="mt-6 text-sm text-gray-400">Tardará aproximadamente 4 minutos.</p>
            </motion.div>
          ) : (
            <motion.div 
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-2xl w-full"
            >
              <div className="mb-12">
                <span className="text-brand-red font-bold text-lg mb-4 block">
                  {currentIndex + 1} <ArrowRight className="inline-block mx-2" size={16} />
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
                  {questions[currentIndex].question}
                </h2>
              </div>

              <div className="space-y-4">
                {questions[currentIndex].type === 'select' ? (
                  <div className="grid grid-cols-1 gap-3">
                    {questions[currentIndex].options?.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(option)}
                        className={`w-full text-left p-6 border-2 transition-all flex justify-between items-center group ${
                          answers[questions[currentIndex].id] === option 
                            ? 'border-brand-red bg-brand-red/5 text-brand-navy' 
                            : 'border-brand-gray hover:border-brand-navy/30 text-brand-navy/70'
                        }`}
                      >
                        <span className="text-lg font-medium">{option}</span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          answers[questions[currentIndex].id] === option 
                            ? 'border-brand-red bg-brand-red' 
                            : 'border-brand-gray group-hover:border-brand-navy/30'
                        }`}>
                          {answers[questions[currentIndex].id] === option && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                      </button>
                    ))}
                  </div>
                ) : questions[currentIndex].type === 'long-text' ? (
                  <textarea
                    autoFocus
                    value={answers[questions[currentIndex].id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    placeholder={questions[currentIndex].placeholder}
                    className="w-full bg-transparent border-b-2 border-brand-gray focus:border-brand-red outline-none py-4 text-2xl text-brand-navy transition-all min-h-[150px] resize-none"
                  />
                ) : (
                  <input
                    autoFocus
                    type={questions[currentIndex].type}
                    value={answers[questions[currentIndex].id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                    placeholder={questions[currentIndex].placeholder}
                    className="w-full bg-transparent border-b-2 border-brand-gray focus:border-brand-red outline-none py-4 text-3xl text-brand-navy transition-all"
                  />
                )}
              </div>

              <div className="mt-12 flex items-center gap-6">
                {questions[currentIndex].type !== 'select' && (
                  <button 
                    onClick={handleNext}
                    disabled={!answers[questions[currentIndex].id] && questions[currentIndex].id !== 'telefono'}
                    className="cta-button disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentIndex === questions.length - 1 ? 'Finalizar' : 'Continuar'}
                  </button>
                )}
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  Presiona Enter ↵
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="fixed bottom-10 right-10 flex gap-2">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === -1}
            className="w-12 h-12 bg-brand-navy text-white flex items-center justify-center disabled:opacity-20 transition-all hover:bg-brand-red"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1 || (currentIndex >= 0 && !answers[questions[currentIndex].id] && questions[currentIndex].id !== 'telefono')}
            className="w-12 h-12 bg-brand-navy text-white flex items-center justify-center disabled:opacity-20 transition-all hover:bg-brand-red"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Diagnostico;
