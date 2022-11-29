import "./style.css"
import mystyle from "./style.module.css"

const Style = () =>{

    // Variables
    const estilo = {
        backgroundColor: 'red',
        padding: '5px',
        color: '#fff'
    }

    return <>
        <h1>Estilos</h1>
        <h3 style={ { color: 'violet', fontSize: '2vw' } }>Estilos inline</h3>

        <h3 style={ estilo }>Estilo Con variables</h3>

        <h3 className="text">Estilo hoja separada</h3>

        <h3 className={mystyle.error}>Estilos con modulos</h3>
    </>
}

export default Style