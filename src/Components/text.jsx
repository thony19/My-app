// Llamando a un style
import "./style.css"

const Text = ( props ) =>{
    console.log( props )
    return (  <div>
        <p>Hola desde el componente text</p>
        <p>El nombre de la variable que le estoy pasando es: {props.name} y su edad: {props.age}</p>
    </div> )
}

export default Text;