import React, { useState } from "react"
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"

const baseDatos = [
    { id:1, equipo:'Real Madrid', pais:'España' },
    { id:2, equipo:'Girona', pais:'España' },
    { id:3, equipo:'Woves', pais:'Ingleterra' },
    { id:4, equipo:'Olimpia', pais:'Honduras' },
    { id:5, equipo:'Galaxi', pais:'USA' }
]

const CrudApp = () => {

    const [equipos, setEquipos] = useState(baseDatos);

    // Inserción de datos
    const addEquipo = ( equipo ) => {}

    return <>
        <h2>CRUD DE EQUIPOS DE FUTBOL ...</h2>

        {/* Formulario para los datos */}
        <CrudForm addEquipo={addEquipo}></CrudForm>

        {/* Mostrar la informacion -> targeta, tabla, targeta */}
        <CrudTable equipos={equipos}></CrudTable>
    </>
}

export default CrudApp