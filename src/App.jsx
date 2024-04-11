import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonajeList from './components/PersonajeList';
import PortalRickAndMorty from './components/PortalRickAndMorty';
import Footer from './components/Footer';
import PersonajeDetalle from './components/PersonajeDetalle';
import usePersonaje from './hooks/usePersonaje';
import usePage from './hooks/usePage';
import Main from './components/Main';
import Buscador from './components/Buscador';


function App() {
  const { page, setPage } = usePage(1)
  const { personaje } = usePersonaje()

  return (
    <BrowserRouter>
      <div className="bg">
        <PortalRickAndMorty />
        <Routes>
          <Route path="/" element={<Main page={page} setPage={setPage} />} />
          <Route path="/search" element={<PersonajeDetalle />} />
          <Route path="/character/:id" element={<PersonajeDetalle />} />


        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
