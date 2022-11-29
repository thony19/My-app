import React from "react"

const CrudForm = () => {

    // Variable de estado
    const [formData, setFormData] = ({
        equipo: '',
        pais: '',
        id: null
    })

    const handleSubmit = (event) =>{
        event.preventDefault(); // Evita que se recarge la página
    }

    // Controla la variable de estado
    const handleChange = ( event ) =>{
        console.log( event.target );
    }

    return <>
        <form action="" className="m-3" onSubmit={handleSubmit}>
            <label htmlFor="equipo">Equipo:</label>
            <input type="text" name="equipo"/>
            <label htmlFor="pais">Pais:</label>
            <input type="text" name="pais"/>
            <input className="btn btn-success mx-1" type="submit" value="Agregar"/>
            <input className="btn btn-danger mx-1" type="reset" value="Cancelar"/>
        </form>
    </>
}

export default CrudForm