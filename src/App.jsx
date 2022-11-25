import React from "react";

// Importanto otros componentes
import Text from "./Components/text";
import PruebaHooks from "./Components/PruebaHooks";
import ListaNombre from "./Components/ListaNombre";
import Pokemones from "./Components/Pokemon";

// Componentes
// class App extends React.Component{
//     render() {
//         return <p>Hola mundo</p>
//     }
// }

// function App1(){
//     return <p>Adios Mundo</p>
// }

const App3 = () =>{
    return (<div>
        {/* <Text name="thony" age={22}/>
        <Text name="Javier" age={23}/>
        <PruebaHooks/>
        <ListaNombre/> */}
        <Pokemones/>
        </div>)
}

export default App3;