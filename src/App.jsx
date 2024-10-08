import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Esto incluye Popper.js
import Inicio from './components/Inicio';
import InicioParte2 from './components/InicioParte2';
import Administracion from './components/Administracion';
import Vision from './components/Vision';
import AsiOperamos from './components/AsiOperamos';
import Requerimientos from './components/Requerimientos';
import Diligencia from './components/Diligencia';
import Productos from './components/Productos';
import Logistica from './components/Logistica';
import GestoresDeCapital from './components/GestoresDeCapital';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path='/' element={<><Inicio /><InicioParte2 /></>} />
          {/* Otras rutas */}
          <Route path='/inicio' element={<><Inicio /><InicioParte2 /></>} />
          <Route path='/about' element={<About />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/administracion' element={<Administracion />} />
          <Route path='/vision-y-desarrollo' element={<Vision />} />
          <Route path='/asi-operamos' element={<AsiOperamos />} />
          <Route path='/requerimientos' element={<Requerimientos />} />
          <Route path='/diligencia' element={<Diligencia />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/logistica' element={<Logistica />} />
          <Route path='/gestores' element={<GestoresDeCapital />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
