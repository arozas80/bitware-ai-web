'use client';

import { useState } from 'react';

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05050A]">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse anim-delay-1000" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
            ✨ DISPONIBLE PARA NUEVOS PROYECTOS
          </span>
        </div>

        <h1 className="animate-fade-in-up anim-delay-100 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
          Automatizamos tu negocio
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            para escalar rápido
          </span>
        </h1>

        <p className="animate-fade-in-up anim-delay-200 text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Implementamos Agentes IA, Chatbots y automatizaciones que eliminan el trabajo repetitivo,
          reducen errores y escalan tu operación sin aumentar personal.
        </p>

        <div className="animate-fade-in-up anim-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            Comenzar Diagnóstico Gratis →
          </a>
          <a
            href="#casos"
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-all"
          >
            Ver Casos de Éxito
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up anim-delay-500 grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '24/7', label: 'Soporte Activo' },
            { value: '-80%', label: 'Errores Operativos' },
            { value: '+50', label: 'Implementaciones' },
            { value: '99%', label: 'Satisfacción' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      title: 'Automatización de Procesos',
      description: 'Libera a tu equipo de tareas manuales repetitivas. Optimizamos flujos de trabajo complejos para que te enfoques en estrategia y crecimiento.',
      icon: '⚡',
    },
    {
      title: 'Chatbots & IA Conversacional',
      description: 'Atención al cliente 24/7 con inteligencia contextual. Responde dudas, califica leads y agenda reuniones automáticamente.',
      icon: '💬',
    },
    {
      title: 'Asistente de Conocimiento IA',
      description: 'IA entrenada con tu documentación interna. Respuestas precisas basadas en tus manuales, contratos y wikis.',
      icon: '🧠',
    },
    {
      title: 'Agentes Telefónicos IA',
      description: 'Automatiza llamadas entrantes y salientes con voces naturales. Ideal para confirmación de citas y seguimiento.',
      icon: '📞',
    },
    {
      title: 'Agentes de Email',
      description: 'Gestión inteligente de bandeja de entrada. Clasificación, respuesta automática y seguimiento de oportunidades.',
      icon: '📧',
    },
    {
      title: 'Integraciones & APIs',
      description: 'Conectamos tus herramientas existentes — CRM, ERP, Slack, WhatsApp — creando un ecosistema unificado.',
      icon: '🔗',
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#05050A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Nuestras Soluciones</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Tecnología que trabaja por ti
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones end-to-end diseñadas para optimizar, automatizar y escalar tu operación sin fricciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="animate-fade-in-up group p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function Process() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Gratuito',
      description: 'Sesión de 30 min para identificar cuellos de botella y oportunidades de automatización inmediatas.',
    },
    {
      number: '02',
      title: 'Propuesta a Medida',
      description: 'Cronograma claro, inversión transparente y proyección de KPIs antes de comprometerte.',
    },
    {
      number: '03',
      title: 'Implementación Ágil',
      description: 'Entregables funcionales en semanas. Ves resultados reales antes de que termine el primer mes.',
    },
  ];

  return (
    <section id="proceso" className="py-24 bg-gradient-to-b from-[#05050A] to-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Cómo Trabajamos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Resultados en semanas, no en meses
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No solo implementamos software — transformamos tu modelo operativo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="animate-fade-in-up relative"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-7xl font-bold text-blue-500/20 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-1/2 h-px bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Results Box */}
        <div className="animate-fade-in-up anim-delay-400 mt-20 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Resultados Típicos - Primeros 30 días</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15 hrs', label: 'Ahorradas por semana' },
              { value: '-80%', label: 'Errores operativos' },
              { value: '4.2x', label: 'ROI promedio' },
              { value: '99.9%', label: 'Uptime garantizado' },
            ].map((result, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{result.value}</div>
                <div className="text-sm text-gray-400">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "Bitware AI automatizó nuestro proceso de atención al cliente. Ahora respondemos el 90% de consultas sin intervención humana.",
      author: 'Angela Gonzales',
      role: 'Gerente de Ops · BabyMarket',
      initials: 'AG',
    },
    {
      quote: "La implementación fue rápida y el ROI se vio en el primer mes. Recuperamos más de 20 horas semanales del equipo.",
      author: 'Carlos Mendoza',
      role: 'CTO · Moonflow Fintech',
      initials: 'CM',
    },
    {
      quote: "El equipo de Bitware entendió nuestros procesos y creó soluciones a medida. Excelente soporte post-implementación.",
      author: 'Laura Ramírez',
      role: 'MKT Director · Agencia 360',
      initials: 'LR',
    },
  ];

  return (
    <section id="casos" className="py-24 bg-[#05050A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="animate-fade-in-up text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Casos de Éxito</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Empresas que confían en Bitware AI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Resultados reales de clientes reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="animate-fade-in-up p-8 bg-white/5 rounded-2xl border border-white/10"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma una implementación?',
      answer: 'Depende de la complejidad, pero la mayoría de las automatizaciones están funcionando en 2-4 semanas. Empezamos con un MVP rápido para validar el ROI, luego iteramos.',
    },
    {
      question: '¿Necesito tener equipo técnico interno?',
      answer: 'No. Nos encargamos de todo el proceso: diagnóstico, implementación, capacitación y soporte. Tu equipo solo necesita estar disponible para las sesiones de descubrimiento.',
    },
    {
      question: '¿Cómo garantizan la seguridad de mis datos?',
      answer: 'Implementamos cifrado end-to-end, controles de acceso estrictos, y cumplimos con estándares de seguridad. Todos los datos sensibles se almacenan en infraestructura segura y auditada.',
    },
    {
      question: '¿Cuánto cuesta una automatización?',
      answer: 'Varía según el alcance. Proyectos típicos van desde $3,000 a $15,000 USD. Ofrecemos diagnóstico gratuito para darte una cotización exacta sin compromiso.',
    },
    {
      question: '¿Qué pasa si la solución no funciona como espero?',
      answer: 'Incluimos período de garantía y soporte post-implementación. Si algo no cumple lo acordado, lo corregimos sin costo adicional.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#05050A] to-[#0a0a14]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-400">
            Todo lo que necesitas saber antes de comenzar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="animate-fade-in-up border border-white/10 rounded-lg overflow-hidden bg-white/5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <span className={`text-blue-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#05050A]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up text-center mb-16">
          <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">Contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            ¿Listo para automatizar? Cuéntanos tu desafío y te contactaremos en menos de 24 horas.
          </p>
          <a
            href="mailto:contacto@bitware-ai.cl"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-12"
          >
            <span>✉️</span>
            contacto@bitware-ai.cl
          </a>
        </div>

        <div className="animate-fade-in-up anim-delay-200 p-8 bg-white/5 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Cuéntanos tu desafío</h3>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">TU NOMBRE</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">EMAIL</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="tu@empresa.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">¿QUÉ QUIERES AUTOMATIZAR?</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proceso o desafío..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-[1.02]"
            >
              Enviar Mensaje
            </button>

            <p className="text-xs text-gray-500 text-center">
              Sin compromiso · Datos seguros · Respuesta en 24h
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 bg-[#05050A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Bitware AI</h3>
            <p className="text-gray-400 max-w-md">
              Automatización e inteligencia artificial para empresas que quieren escalar sin límites humanos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-white transition-colors">Automatización</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Chatbots IA</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Agentes Telefónicos</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Integraciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Bitware AI · Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/alvaro-rozas/" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/arozas" className="text-gray-400 hover:text-white transition-colors">X</a>
            <a href="https://instagram.com/alvaro.rozas.v" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="https://youtube.com/@alvarorozasv" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="bg-[#05050A] min-h-screen">
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
