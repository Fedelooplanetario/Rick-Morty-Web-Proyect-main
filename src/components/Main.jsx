import React from 'react'
import PersonajeList from './PersonajeList'
import Navpage from './Navpage'
import Buscador from './Buscador';
import { useState } from 'react';
import { useBusqueda } from '../hooks/useBusqueda';


/*export default function Main(props) {
    return (
        <div>
            <Buscador setResultadosBusqueda={setResultadosBusqueda} setBusquedaRealizada={setBusquedaRealizada} />
            {<Navpage page={props.page} setPage={props.setPage} />}
            {<PersonajeList page={props.page} />}
            {<Navpage page={props.page} setPage={props.setPage} />}
        </div>
    )
}*/

/*export default function Main(props) {
    const { resultadosBusqueda, busquedaRealizada, realizarBusqueda } = useBusqueda();

    return (
        <div>
            <Navpage page={props.page} setPage={props.setPage} />
            <Buscador setResultadosBusqueda={resultadosBusqueda} setBusquedaRealizada={busquedaRealizada} />
            {busquedaRealizada ? (
                resultadosBusqueda.map((personaje) => (
                    <div key={personaje.id}>
                        <h2>{personaje.name}</h2>
                        <img src={personaje.image} alt={personaje.name} />
                    </div>
                ))
            ) :/* (
                resultadosBusqueda.length === 0 ? (
                    <div>
                        <h2>Bienvenido a la aplicación</h2>
                        <p>Por favor, realiza una búsqueda para ver los personajes.</p>
                    </div>
                ) :*//* (
                    <PersonajeList page={props.page} />
                )}
            
            <Navpage page={props.page} setPage={props.setPage} />
        </div>
    )
}*/


/*export default function Main(props) {
    const { resultadosBusqueda, busquedaRealizada, realizarBusqueda } = useBusqueda();

    return (
        <div>
            <Navpage page={props.page} setPage={props.setPage} />
            <Buscador realizarBusqueda={realizarBusqueda} />
            {busquedaRealizada ? (
                resultadosBusqueda.map((personaje) => (
                    <div key={personaje.id}>
                        <h2>{personaje.name}</h2>
                        <img src={personaje.image} alt={personaje.name} />
                    </div>
                ))
            ) : (
                <>
                    <PersonajeList page={props.page} />
                    <Navpage page={props.page} setPage={props.setPage} />
                </>
            )}
        </div>
    )
}*/
export default function Main(props) {
    const { resultadosBusqueda, busquedaRealizada, realizarBusqueda } = useBusqueda();
  
    return (
      <div>
        <Navpage page={props.page} setPage={props.setPage} />
        <Buscador realizarBusqueda={realizarBusqueda} />
        {busquedaRealizada ? (
          resultadosBusqueda.map((personaje) => (
            <div key={personaje.id}>
              <h2>{personaje.name}</h2>
              <img src={personaje.image} alt={personaje.name} />
            </div>
          ))
        ) : (
          <>
            <PersonajeList page={props.page} />
            <Navpage page={props.page} setPage={props.setPage} />
          </>
        )}
      </div>
    )
  }