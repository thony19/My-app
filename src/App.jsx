import React from "react";

// Importanto otros componentes
import Text from "./Components/text";
import PruebaHooks from "./Components/PruebaHooks";
import ListaNombre from "./Components/ListaNombre";
import Pokemones from "./Components/Pokemon";
import Referencias from "./Components/Referencias";
import PokemonesHooks from "./Components/PokemonesHooks";

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
        <Text name="thony" age={22}/>
        <hr/>
        <Text name="Javier" age={23}/>
        <hr/>
        <PruebaHooks/>
        <hr/>
        <ListaNombre/>
        <hr/>
        <Pokemones/>
        <hr/>
        <Referencias></Referencias>
        <hr/>
        <PokemonesHooks></PokemonesHooks>
        </div>)
}

export default App3;