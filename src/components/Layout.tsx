import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowServices(false);
  }, [location]);

  const services = [
    { name: 'Marketing Estratégico', path: '/servicios/marketing-estrategico' },
    { name: 'Publicidad (Ads)', path: '/servicios/publicidad-ads' },
    { name: 'Página Web', path: '/servicios/pagina-web' },
    { name: 'Automatización (Bot)', path: '/servicios/automatizacion-bot' },
  ];

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
    const isActive = location.pathname === to;
    return (
      <Link to={to} className={`nav-link ${isActive ? 'text-brand-red font-bold' : ''}`}>
        {children}
        {isActive && (
          <motion.div 
            layoutId="nav-underline"
            className="h-[2px] bg-brand-red mt-1 w-full"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-white/80 backdrop-blur-md py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="https://enlizboqeqximxogepig.supabase.co/storage/v1/object/sign/LuisMKT%20sin%20marco/imagen%20sin%20marco%20LuisMKT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NWNhYTVkMy00MTc0LTQ4MDMtYThkMy0xODkxYzMzYTRmOGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMdWlzTUtUIHNpbiBtYXJjby9pbWFnZW4gc2luIG1hcmNvIEx1aXNNS1QucG5nIiwiaWF0IjoxNzczODU1MzE0LCJleHAiOjE4MDUzOTEzMTR9.f1sDM8SniDW_d51TfctcxqUQQvK3xa_1qNm3ySgEEdY" 
            alt="LUIS MKT Logo" 
            className="w-12 h-12 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-xl tracking-tighter text-brand-navy">LUIS MKT</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <a 
            href="https://tally.so/r/b5O1MZ" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link font-bold text-brand-red flex items-center gap-2"
          >
            Diagnóstico
          </a>
          
          <div className="relative group" onMouseEnter={() => setShowServices(true)} onMouseLeave={() => setShowServices(false)}>
            <button className={`nav-link flex items-center gap-1 cursor-pointer ${location.pathname.startsWith('/servicios') ? 'text-brand-red font-bold' : ''}`}>
              Servicios <ChevronDown size={14} className={`transition-transform duration-300 ${showServices ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showServices && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-2xl border border-brand-gray mt-2 py-3 rounded-sm z-[60]"
                >
                  {services.map((s) => (
                    <Link 
                      key={s.path} 
                      to={s.path} 
                      className={`block px-6 py-3 hover:bg-brand-gray text-brand-navy transition-colors text-sm font-medium ${location.pathname === s.path ? 'text-brand-red bg-brand-gray' : ''}`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          
          <div className="flex items-center gap-2 px-4 border-l border-brand-gray ml-2">
            <a href="https://www.instagram.com/luismkt2026" target="_blank" rel="noopener noreferrer" title="Instagram" className="p-2 text-brand-navy/60 hover:text-brand-red hover:bg-brand-gray rounded-full transition-all">
              <Instagram size={18} />
            </a>
            <a href="mailto:luismkt2026@gmail.com" title="Email" className="p-2 text-brand-navy/60 hover:text-brand-red hover:bg-brand-gray rounded-full transition-all">
              <Mail size={18} />
            </a>
            <a href="https://wa.me/34652426328" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="p-2 text-brand-navy/60 hover:text-brand-red hover:bg-brand-gray rounded-full transition-all">
              <MessageCircle size={18} />
            </a>
          </div>

          <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="cta-button text-xs py-3 px-6">
            Solicitar diagnóstico
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-navy hover:bg-brand-gray rounded-md transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[72px] lg:hidden bg-white z-40 overflow-y-auto"
          >
            <div className="px-6 py-10 flex flex-col space-y-8">
              <Link to="/" className={`text-2xl font-bold ${location.pathname === '/' ? 'text-brand-red' : 'text-brand-navy'}`}>Home</Link>
              <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-brand-red">Diagnóstico</a>
              
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">Servicios</p>
                <div className="grid grid-cols-1 gap-4 pl-4 border-l border-brand-gray">
                  {services.map((s) => (
                    <Link key={s.path} to={s.path} className={`text-lg font-medium ${location.pathname === s.path ? 'text-brand-red' : 'text-brand-navy/70'}`}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/sobre-nosotros" className={`text-2xl font-bold ${location.pathname === '/sobre-nosotros' ? 'text-brand-red' : 'text-brand-navy'}`}>Sobre Nosotros</Link>
              <Link to="/contacto" className={`text-2xl font-bold ${location.pathname === '/contacto' ? 'text-brand-red' : 'text-brand-navy'}`}>Contacto</Link>
              
              <div className="pt-8 border-t border-brand-gray">
                <div className="flex gap-6 mb-8 text-brand-navy/60">
                  <a href="https://www.instagram.com/luismkt2026" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                  <a href="mailto:luismkt2026@gmail.com"><Mail size={24} /></a>
                  <a href="https://wa.me/34652426328" target="_blank" rel="noopener noreferrer"><MessageCircle size={24} /></a>
                </div>
                <a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="cta-button w-full py-5 text-base">
                  Solicitar diagnóstico gratuito
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-3 mb-6">
            <img 
              src="https://enlizboqeqximxogepig.supabase.co/storage/v1/object/sign/LuisMKT%20sin%20marco/imagen%20sin%20marco%20LuisMKT.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NWNhYTVkMy00MTc0LTQ4MDMtYThkMy0xODkxYzMzYTRmOGIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJMdWlzTUtUIHNpbiBtYXJjby9pbWFnZW4gc2luIG1hcmNvIEx1aXNNS1QucG5nIiwiaWF0IjoxNzczODU1MzE0LCJleHAiOjE4MDUzOTEzMTR9.f1sDM8SniDW_d51TfctcxqUQQvK3xa_1qNm3ySgEEdY" 
              alt="LUIS MKT Logo" 
              className="w-10 h-10 object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-lg tracking-tighter">LUIS MKT</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Consultoría estratégica para entrenadores personales. Transformamos negocios de sesiones en sistemas de ingresos estables.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Mapa del sitio</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><a href="https://tally.so/r/b5O1MZ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Diagnóstico</a></li>
            <li><Link to="/servicios/marketing-estrategico" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link to="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Contacto</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-red" /> 
              <a href="mailto:luismkt2026@gmail.com" className="hover:text-white transition-colors">luismkt2026@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-red" /> 
              <a href="tel:+34652426328" className="hover:text-white transition-colors">652426328</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-red" /> 
              <a href="https://www.google.com/maps/search/?api=1&query=Mérida,+España" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mérida, España</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-brand-red">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/luismkt2026" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
              <Instagram size={20} />
            </a>
            <a href="mailto:luismkt2026@gmail.com" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/34652426328" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} LUIS MKT. Todos los derechos reservados.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col noise-bg">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
