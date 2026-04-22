'use client';

import { useState, useEffect, useRef } from 'react';

// ── Scroll reveal hook ──
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

// ── Animated Section Wrapper ──
function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useInView(0.08);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── Particle Field ──
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}

// ── Gradient Mesh Background ──
function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/4 w-[80vw] h-[80vw] bg-[#3B82F6]/8 rounded-full blur-[128px] animate-drift-slow" />
      <div className="absolute -bottom-1/2 -right-1/4 w-[80vw] h-[80vw] bg-[#A855F7]/8 rounded-full blur-[128px] animate-drift-slow anim-reverse" />
      <div className="absolute top-1/3 left-1/2 w-[40vw] h-[40vw] bg-[#06B6D4]/5 rounded-full blur-[96px] animate-drift-medium" />
    </div>
  );
}

// ── Navigation ──
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Casos', href: '#casos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#05050A]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-tight">
          Bitware<span className="text-blue-400">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contacto"
          className="hidden md:inline-flex px-5 py-2 text-sm font-medium text-white bg-blue-600/20 border border-blue-500/30 rounded-full hover:bg-blue-600/40 transition-all duration-300"
        >
          Empezar →
        </a>
      </div>
    </nav>
  );
}

// ── Hero ──
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05050A]">
      <GradientMesh />
      <ParticleField />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <AnimatedSection>
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            DISPONIBLE PARA NUEVOS PROYECTOS
          </span>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
            <span className="text-white">Automatizamos</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              tu operación
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Agentes IA, chatbots y automatizaciones que eliminan el trabajo repetitivo y escalan tu negocio.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={450}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="#contacto"
              className="group px-8 py-4 bg-white text-[#05050A] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 flex items-center justify-center gap-2"
            >
              Diagnóstico Gratis
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#casos"
              className="px-8 py-4 text-white font-medium rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
            >
              Ver Resultados
            </a>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/10">
            {[
              { value: '24/7', label: 'Operación activa' },
              { value: '—80%', label: 'Errores operativos' },
              { value: '+50', label: 'Proyectos entregados' },
              { value: '4.2×', label: 'ROI promedio' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-scroll-down" />
      </div>
    </section>
  );
}

// ── Services ──
function Services() {
  const services = [
    {
      title: 'Automatización de Procesos',
      description:
        'Elimina tareas manuales repetitivas. Optimizamos flujos de trabajo para que tu equipo se enfoque en lo que importa.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'Chatbots con IA Conversacional',
      description:
        'Atención 24/7 con contexto real. Responde dudas, califica leads y agenda reuniones sin intervención humana.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.18.063-2.283.695-2.98 1.692m11.7 5.3-2.925 2.925M3 3l3.09 3.09m11.7 5.3-2.925 2.925m1.598-5.485a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      ),
    },
    {
      title: 'Asistente de Conocimiento IA',
      description:
        'IA entrenada con tu documentación interna. Respuestas precisas basadas en tus manuales, contratos y wikis.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      ),
    },
    {
      title: 'Agentes Telefónicos IA',
      description:
        'Automatiza llamadas con voces naturales. Ideal para confirmación de citas, seguimiento y atención telefónica.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
    },
    {
      title: 'Agentes de Email',
      description:
        'Gestión inteligente de bandeja de entrada. Clasificación, respuesta automática y seguimiento de oportunidades.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      title: 'Integraciones & APIs',
      description:
        'Conectamos tus herramientas — CRM, ERP, Slack, WhatsApp — en un ecosistema operativo unificado y fluido.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="relative py-32 bg-[#05050A]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Nuestras Soluciones
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Tecnología que trabaja
            <br />
            <span className="text-gray-500">por ti</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones end-to-end para optimizar, automatizar y escalar sin fricciones.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="group h-full p-8 bg-white/[0.02] rounded-2xl border border-white/[0.06] hover:border-blue-500/20 hover:bg-white/[0.04] transition-all duration-500">
                <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process ──
function Process() {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico Gratuito',
      description:
        'Sesión de 30 min para identificar cuellos de botella y oportunidades de automatización inmediatas.',
    },
    {
      number: '02',
      title: 'Propuesta a Medida',
      description:
        'Cronograma claro, inversión transparente y proyección de KPIs antes de que te comprometas.',
    },
    {
      number: '03',
      title: 'Implementación Ágil',
      description:
        'Entregables funcionales en semanas. Ves resultados reales antes de que termine el primer mes.',
    },
  ];

  return (
    <section id="proceso" className="relative py-32 bg-[#0a0a14]">
      <GradientMesh />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Cómo Trabajamos
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            De cero a
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              resultados reales
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            No solo implementamos software. Transformamos tu modelo operativo.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 200} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-2xl font-bold text-white backdrop-blur-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Results Box */}
        <AnimatedSection delay={400} className="mt-20">
          <div className="p-8 md:p-12 bg-white/[0.02] rounded-3xl border border-white/[0.06] backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-10 text-center tracking-tight">
              Resultados típicos — primeros 30 días
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '15 hrs', label: 'Ahorradas por semana' },
                { value: '—80%', label: 'Errores operativos' },
                { value: '4.2×', label: 'ROI promedio' },
                { value: '99.9%', label: 'Uptime garantizado' },
              ].map((result, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                    {result.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ── Testimonials ──
function Testimonials() {
  const testimonials = [
    {
      quote:
        "Bitware AI automatizó nuestro proceso de atención al cliente. Ahora respondemos el 90% de consultas sin intervención humana.",
      author: 'Angela Gonzales',
      role: 'Gerente de Ops · BabyMarket',
      initials: 'AG',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      quote:
        "La implementación fue rápida y el ROI se vio en el primer mes. Recuperamos más de 20 horas semanales del equipo.",
      author: 'Carlos Mendoza',
      role: 'CTO · Moonflow Fintech',
      initials: 'CM',
      color: 'from-violet-500 to-purple-500',
    },
    {
      quote:
        "El equipo entendió nuestros procesos y creó soluciones a medida. Soporte excepcional post-implementación.",
      author: 'Laura Ramírez',
      role: 'MKT Director · Agencia 360',
      initials: 'LR',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="casos" className="relative py-32 bg-[#05050A]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Casos de Éxito
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Lo que dicen
            <br />
            <span className="text-gray-500">nuestros clientes</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="h-full p-8 bg-white/[0.02] rounded-2xl border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 mb-8 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.author}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ──
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma una implementación?',
      answer:
        'Depende de la complejidad, pero la mayoría de las automatizaciones están funcionando en 2-4 semanas. Empezamos con un MVP rápido para validar el ROI, luego iteramos.',
    },
    {
      question: '¿Necesito tener equipo técnico interno?',
      answer:
        'No. Nos encargamos de todo: diagnóstico, implementación, capacitación y soporte. Tu equipo solo necesita estar disponible para las sesiones de descubrimiento.',
    },
    {
      question: '¿Cómo garantizan la seguridad de mis datos?',
      answer:
        'Cifrado end-to-end, controles de acceso estrictos y cumplimiento con estándares de seguridad. Todos los datos sensibles en infraestructura segura y auditada.',
    },
    {
      question: '¿Cuánto cuesta una automatización?',
      answer:
        'Varía según el alcance. Proyectos típicos van desde $3,000 a $15,000 USD. Ofrecemos diagnóstico gratuito para una cotización exacta sin compromiso.',
    },
    {
      question: '¿Qué pasa si la solución no funciona como espero?',
      answer:
        'Incluimos período de garantía y soporte post-implementación. Si algo no cumple lo acordado, lo corregimos sin costo adicional.',
    },
  ];

  return (
    <section id="faq" className="relative py-32 bg-[#0a0a14]">
      <GradientMesh />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Preguntas frecuentes
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-all duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-white font-medium text-sm">{faq.question}</span>
                  <span
                    className={`text-blue-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === i ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA ──
function CTA() {
  return (
    <section id="contacto" className="relative py-32 bg-[#05050A] overflow-hidden">
      <GradientMesh />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            ¿Listo para
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              automatizar?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Cuéntanos tu desafío. Te contactamos en menos de 24 horas.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mb-6">
          <a
            href="mailto:contacto@bitware-ai.cl"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            contacto@bitware-ai.cl
          </a>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="max-w-md mx-auto">
            <div className="p-8 bg-white/[0.02] rounded-3xl border border-white/[0.06]">
              <h3 className="text-lg font-semibold text-white mb-8 tracking-tight">
                Cuéntanos tu desafío
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="tu@empresa.com"
                  />
                </div>
                <div>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                    placeholder="¿Qué proceso quieres automatizar?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-[#05050A] font-semibold text-sm rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/10"
                >
                  Enviar Mensaje
                </button>
                <p className="text-xs text-gray-600 text-center pt-2">
                  Sin compromiso · Datos seguros · Respuesta en 24h
                </p>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ── Footer ──
function Footer() {
  return (
    <footer className="py-16 bg-[#05050A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              Bitware<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Automatización e inteligencia artificial para empresas que quieren escalar sin límites humanos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4 tracking-wide">Servicios</h4>
            <ul className="space-y-3">
              {['Automatización', 'Chatbots IA', 'Agentes Telefónicos', 'Integraciones'].map((item) => (
                <li key={item}>
                  <a href="#servicios" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-4 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {['Privacidad', 'Términos', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">
            © 2026 Bitware AI. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {[
              { label: 'LinkedIn', href: 'https://linkedin.com/in/alvaro-rozas/' },
              { label: 'X', href: 'https://x.com/arozas' },
              { label: 'Instagram', href: 'https://instagram.com/alvaro.rozas.v' },
              { label: 'YouTube', href: 'https://youtube.com/@alvarorozasv' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Main Page ──
export default function Home() {
  return (
    <main className="bg-[#05050A] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
