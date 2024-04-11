import React, { useState } from 'react';
import { buscarPorNombre } from '../services/personajesServicio';
import { useNavigate } from 'react-router-dom';
import { useBusqueda } from '../hooks/useBusqueda';



/*const Buscador = () => {
    const [nombre, setNombre] = useState('');
    const [resultados, setResultados] = useState([]);
    const navigate = useNavigate();


    const buscar = async () => {
        const data = await buscarPorNombre(nombre);
        setResultados(data.results);
        setBusquedaRealizada(true);
        return (
            <div>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <button onClick={buscar}>Buscar</button>
                {resultados.map((personaje) => (
                    <div key={personaje.id} >
                        <h2>{personaje.name}</h2>
                        <img src={personaje.image} alt={personaje.name} />
                    </div>
                ))}
            </div>
        );
    }

 }
  export default Buscador;*/

  /*const Buscador = () => {
    const [nombre, setNombre] = useState('');
    
    const navigate = useNavigate();
    const { resultadosBusqueda, busquedaRealizada, realizarBusqueda } = useBusqueda();
    const buscar = async () => {
        const data = await buscarPorNombre(nombre);
        setResultados(data.results);
        setBusquedaRealizada(true);
        navigate('/search');
    }

    return (
        <div>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <button onClick={buscar}>Buscar</button>
            {resultados.map((personaje) => (
                <div key={personaje.id} >
                    <h2>{personaje.name}</h2>
                    <img src={personaje.image} alt={personaje.name} />
                </div>
            ))}
        </div>
    );
}

export default Buscador;*/

const Buscador = () => {
    const [nombre, setNombre] = useState('');
    const { resultadosBusqueda, busquedaRealizada, realizarBusqueda } = useBusqueda();
    const navigate = useNavigate();
  
    const buscar = async () => {
      const data = await buscarPorNombre(nombre);
      realizarBusqueda(data.results);
      navigate('/search');
    }
  
    return (
      <div>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <button onClick={buscar}>Buscar</button>
        {busquedaRealizada && resultadosBusqueda.map((personaje) => (
          <div key={personaje.id}>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name} />
          </div>
        ))}
      </div>
    );
  }
  export default Buscador;