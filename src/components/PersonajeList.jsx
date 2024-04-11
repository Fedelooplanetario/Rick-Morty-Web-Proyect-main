import React from 'react'
import Personaje from './Personaje';
import usePersonaje from '../hooks/usePersonaje';




export default function PersonajeList(props) {

  const { personajes } = usePersonaje(props.page);
  
  return (
    <> 
      <div className="grid-container">

        {personajes.map((personaje) => (
          <Personaje key={personaje.id} personaje={personaje} />
        ))}
      </div>
     </>
  )

}


