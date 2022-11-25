import React, { useState, useEffect } from "react";

const PruebaHooks = () =>{
    const [contador, setContador] = useState(0);

    // funcionamiento por defecto
    useEffect( () => {
        console.log('useEffect')
    } );

    // una sola ves
    useEffect( () => {
        console.log('useEffect una vez')
    }, [] );

    // controlando a useEffect en base a una variable
    useEffect( () => {
        console.log('manejando con el contador ', contador)
    }, [contador] ); //Se ejecutará si la varieble contador sufre algún cambio
    
    return ( <div>
        <p>El valor actual del contador es: { contador }</p>
        <button onClick={()=> { setContador( contador + 1 ) }}>
            Aumentar
        </button>
        <button onClick={()=> { setContador( contador - 1 ) }}>
            Disminuir
        </button>
        <button onClick={()=> { setContador( 0 ) }}>
            Restablecer
        </button>
    </div> )
}

export default PruebaHooks;