import React, { useState, useEffect } from 'react';
import {
  Zap,
  Search,
  FileText,
  Wrench,
  Phone,
  MessageCircle,
  Clock,
  Menu,
  X,
  ShieldCheck,
  MapPin,
  CheckCircle2
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Diagnóstico de Avería',
      description: 'Identificación precisa de fallas eléctricas complejas.',
      icon: <Search className="w-8 h-8 text-electric-yellow" />
    },
    {
      title: 'Reparación de Corto Circuito',
      description: 'Solución inmediata para cortes de energía y riesgos eléctricos.',
      icon: <Zap className="w-8 h-8 text-electric-yellow" />
    },
    {
      title: 'Presupuesto Eléctrico',
      description: 'Asesoría profesional y costos transparentes para tu proyecto.',
      icon: <FileText className="w-8 h-8 text-electric-yellow" />
    },
    {
      title: 'Inspección de Falla',
      description: 'Revisión exhaustiva para prevenir accidentes y optimizar consumo.',
      icon: <Wrench className="w-8 h-8 text-electric-yellow" />
    }
  ];

  const NavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-white hover:text-electric-yellow font-medium transition-colors duration-300 py-2 md:py-0"
    >
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-matte-black text-white selection:bg-electric-yellow selection:text-black">

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-matte-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="text-electric-yellow fill-electric-yellow" />
            <span className="text-xl font-black tracking-tighter text-white">ELECTRICISTAS <span className="text-electric-yellow">PRO</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#inicio">Inicio</NavLink>
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
            <a
              href="tel:04144091275"
              className="bg-electric-yellow text-black px-6 py-2 rounded-full font-bold hover:shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all transform hover:-translate-y-1"
            >
              Llamar Ahora
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-matte-black border-b border-white/10 flex flex-col items-center py-8 space-y-6 animate-in slide-in-from-top duration-300">
            <NavLink href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</NavLink>
            <NavLink href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</NavLink>
            <NavLink href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</NavLink>
            <a
              href="tel:04144091275"
              className="bg-electric-yellow text-black px-8 py-3 rounded-full font-bold"
            >
              0414-4091275
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-electric-yellow/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-electric-yellow/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-electric-yellow" />
            <span className="text-xs font-bold tracking-widest uppercase">Disponible ahora 24/7</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight uppercase">
            Servicio Eléctrico <br />
            <span className="text-electric-yellow">Profesional</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-medium">
            Expertos en Soluciones Eléctricas para tu Casa y Negocio. Garantizamos seguridad y eficiencia en cada cable.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="w-full md:w-auto bg-electric-yellow text-black px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(255,215,0,0.3)]"
            >
              Solicitar Presupuesto
            </a>
            {/* <div className="flex items-center space-x-4 px-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-matte-black bg-white/10 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-white/50">+500 Clientes Satisfechos</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicios" className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl uppercase mb-4">Servicios Especializados</h2>
            <div className="h-1.5 w-24 bg-electric-yellow mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-electric-yellow/50 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:bg-electric-yellow group-hover:text-black transition-colors duration-500">
                  {React.cloneElement(service.icon, { className: "w-8 h-8 transition-colors duration-500 group-hover:text-black" })}
                </div>
                <h3 className="text-xl font-black mb-4 group-hover:text-electric-yellow transition-colors">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Value */}
      <section className="py-20 bg-electric-yellow text-black overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Zap size={400} />
        </div>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase mb-4 tracking-tighter">
            Nuestra <span className="underline decoration-black/20">Responsabilidad</span> es su Seguridad
          </h2>
          <p className="text-lg md:text-xl font-bold opacity-80 max-w-2xl mx-auto italic">
            "No solo arreglamos cables, aseguramos la tranquilidad de tu hogar y el funcionamiento de tu empresa."
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden flex flex-col lg:flex-row">

            <div className="p-12 lg:p-20 flex-1">
              <h2 className="text-4xl font-black mb-8 uppercase">Hablemos de su <span className="text-electric-yellow">Proyecto</span></h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-electric-yellow/10 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-electric-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Garantía Certificada</h4>
                    <p className="text-white/50">Todos nuestros trabajos incluyen póliza de garantía por escrito.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-electric-yellow/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-electric-yellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Atención Local</h4>
                    <p className="text-white/50">Cobertura total en la zona con respuesta rápida.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="tel:04144091275"
                  className="flex items-center justify-center space-x-3 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-electric-yellow hover:text-black hover:border-electric-yellow transition-all font-bold group"
                >
                  <Phone className="group-hover:animate-bounce" />
                  <span>0414-4091275</span>
                </a>
                <a
                  href="https://wa.me/584144091275"
                  className="flex items-center justify-center space-x-3 bg-[#25D366] text-white p-6 rounded-2xl hover:saturate-150 transition-all font-bold"
                >
                  <MessageCircle />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-white/[0.02] p-12 lg:p-20 border-l border-white/10 flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 bg-electric-yellow text-black rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,215,0,0.2)]">
                <ShieldCheck size={64} />
              </div>
              <h3 className="text-2xl font-black mb-2 uppercase">Certificados</h3>
              <p className="text-white/50 mb-8 max-w-[250px]">Electricistas autorizados con más de 15 años de experiencia.</p>
              <div className="flex flex-col space-y-4 w-full">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-white/60">Emergencia 24h</span>
                  <span className="text-electric-yellow font-bold">ACTIVO</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-white/60">Presupuestos</span>
                  <span className="text-electric-yellow font-bold">GRATIS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2">
              <Zap className="text-electric-yellow fill-electric-yellow" />
              <span className="text-xl font-black tracking-tighter uppercase">ELECTRICISTAS <span className="text-electric-yellow">PRO</span></span>
            </div>

            <div className="flex space-x-8 text-sm font-bold text-white/40 uppercase tracking-widest">
              <p>© 2026 Reservados todos los derechos</p>
            </div>

            <div className="flex space-x-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <Phone size={18} className="text-white/60" />
              </div>
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <MessageCircle size={18} className="text-white/60" />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-electric-yellow/30 font-black tracking-[0.2em] text-[10px] uppercase">
              Excelencia • Seguridad • Responsabilidad
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
