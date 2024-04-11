import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerPersonajePorId } from '../services/personajesServicio';

function PersonajeDetalle() {
    const [personaje, setPersonaje] = useState({})
    const { id } = useParams()

    useEffect(() => {
        obtenerPersonajePorId(id).
            then(
                data => {
                    setPersonaje(data)

                })
    }, [id])



    return (
        <div className="personaje-container">
            <div className="personaje-detalle">
                <img className="personaje-detalle-img" src={personaje.image} alt={personaje.name} />
                <div className='personaje-descripcion'>
                    <p>Status: {personaje.status}</p>
                    <p>Species: {personaje.species}</p>
                    <p>Gender: {personaje.gender}</p>
                </div>
            </div>
        </div>
    );
}

export default PersonajeDetalle;




