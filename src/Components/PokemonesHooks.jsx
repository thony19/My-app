import React, { useState, useEffect } from "react";
import usePokemon from '../hooks/usePokemon';

const PokemonesHooks = () =>{

    const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    const { pokemones, loading, anterior, siguiente } = usePokemon( actual );

    return(
        // Mientras carga muestra este mensaje
        loading ? 
            <p>Cargando Pokemones</p>
        :
        <div>
            <ul>
                {
                    pokemones.map( (element, index) => {
                        return <li key={index}>{element.name}</li>
                    } )
                }
            </ul>
            <button onClick={ ()=> anterior != null && setActual(anterior) }>Anterior</button>
            <button onClick={ ()=> siguiente != null && setActual(siguiente) }>Siguiente</button>
        </div>
    )
}

export default PokemonesHooks;