import React, { useRef } from "react"

const Referencias = () =>{
    const inputRef = useRef();

    return(
        <div>
            <h1>Referencias</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={() => inputRef.current.focus()}>Focus</button>
        </div>
    )
}

export default Referencias