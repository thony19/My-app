const CrudTable = ( {equipos} ) => {
    return <>
        <h3>Equipos Actuales</h3>
        <table border='1'>
            <tr>
                <td>#</td>
                <td>Equipo</td>
                <td>Pais</td>
                <td></td>
            </tr>
            {
                equipos.length === 0 ? <td>No hay Datos</td>
                : equipos.map( (element, index)=>{
                    return <tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.equipo}</td>
                            <td>{element.pais}</td>
                            <td>
                                <button className="btn btn-warning mx-1">Editar</button>
                                <button className="btn btn-danger mx-1">Eliminar</button>
                            </td>
                        </tr>
                } ) 
            }
        </table>
    </>
}

export default CrudTable