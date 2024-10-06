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

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/home' element={<h1 className="text-center pt-5">Home Pages</h1>}></Route> */}
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/inicio2' element={<InicioParte2 />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacto' element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
