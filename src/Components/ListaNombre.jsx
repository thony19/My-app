import React, { useState } from "react";

const ListaNombre = () =>{
    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState([]);

    const Guardar = () =>{
        setNombres( [...nombres, nombre] );
        setNombre("")
    }

    return ( <div>
        <h2>Lista de Nombres</h2>
        <p>Ingresa un nombre: </p>
        <input type="text" value={ nombre } onChange={ ( event )=>{ setNombre(event.target.value) } }/>
        <button onClick={ Guardar }>Enviar</button>

        <ul>
            {
                nombres.map( (element, index)=>{
                    return <li key={index}> {element} </li>
                } )
            }
        </ul>
    </div> )
}

export default ListaNombre;