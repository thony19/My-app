import React, { useState } from "react";

const PruebaHooks = () =>{
    const [contador, setContador] = useState(0);

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