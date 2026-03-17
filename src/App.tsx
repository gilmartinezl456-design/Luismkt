import React from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diagnostico from './pages/Diagnostico';
import IngresosEstables from './pages/IngresosEstables';
import CaptacionPredecible from './pages/CaptacionPredecible';
import Implementacion from './pages/Implementacion';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/servicios/ingresos-estables" element={<IngresosEstables />} />
          <Route path="/servicios/captacion-predecible" element={<CaptacionPredecible />} />
          <Route path="/servicios/implementacion" element={<Implementacion />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
