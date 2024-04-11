import React from 'react'
import { useEffect,useState } from 'react';
import { obtenerPersonaje } from '../services/personajesServicio';


export default function usePersonaje(page) {
    const [personajes, setPersonajes] = useState([]);


    useEffect(() => {
      obtenerPersonaje(page).
      then(
        data => { setPersonajes(data.results) 
          /*console.log(data)
          console.log("personajelist: "+ page)*/
        }
        
        
      )
    },[page] )

    return {personajes}
  
}
