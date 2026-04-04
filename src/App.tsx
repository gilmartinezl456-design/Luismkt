import React from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarketingEstrategico from './pages/MarketingEstrategico';
import PublicidadAds from './pages/PublicidadAds';
import PaginaWeb from './pages/PaginaWeb';
import AutomatizacionBot from './pages/AutomatizacionBot';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios/marketing-estrategico" element={<MarketingEstrategico />} />
          <Route path="/servicios/publicidad-ads" element={<PublicidadAds />} />
          <Route path="/servicios/pagina-web" element={<PaginaWeb />} />
          <Route path="/servicios/automatizacion-bot" element={<AutomatizacionBot />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
