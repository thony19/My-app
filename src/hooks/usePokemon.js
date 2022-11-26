import { useState, useEffect } from "react";

const usePokemones = ( url ) =>{

    const [pokemones, setPokemones] = useState([]);
    const [anterior, setAnterior] = useState(null);
    const [siguiente, setSiguiente] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setLoading(true);
        fetch( url ).then( (response)=> response.json() )
        .then( (data) => {
            console.log( data )
            setPokemones( data.results );
            setAnterior( data.previous );
            setSiguiente( data.next );
            setLoading(false);
        } )
    }, [url] )

    return { pokemones, loading, anterior, siguiente }
}

export default usePokemones;