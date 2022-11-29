import React from "react";

// Importanto otros componentes
import Text from "./Components/text";
import PruebaHooks from "./Components/PruebaHooks";
import ListaNombre from "./Components/ListaNombre";
import Pokemones from "./Components/Pokemon";
import Referencias from "./Components/Referencias";
import PokemonesHooks from "./Components/PokemonesHooks";
import Style from "./Components/style";

import NavScrollExample from "./Components/Bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import CrudApp from "./Components/Crud/CrudApp";

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
        <hr/>
        <Style></Style>
        <hr/>
        <NavScrollExample></NavScrollExample>
        {/* <CrudApp></CrudApp> */}
        </div>)
}

export default App3;