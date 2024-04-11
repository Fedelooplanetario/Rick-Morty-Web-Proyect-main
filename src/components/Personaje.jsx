import React from 'react'
import { Link } from 'react-router-dom'



function Personaje({ personaje }) {
    return (
        <div className="card">
            
           
            <Link to={`/character/${personaje.id}`}>
                <img className="card__img" src={personaje.image} alt={personaje.name} />
            </Link>
            <span class="card__footer">
            <span className="card-title">{personaje.name}</span>
             
            </span>
    
            
        </div>
    );
}

export default Personaje;