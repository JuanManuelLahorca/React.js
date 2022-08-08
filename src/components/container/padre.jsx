import React, { useState } from 'react';
import Hijo from '../pure/hijo'



const Padre = () => {

    const [name, setName] = useState("Juancha");

    function ShowMessage(text){
        alert (`Mensaje recibido: ${text}`);
    }

    function updateName(newName){
        setName(newName);
    }

    return (
        <div>
            <Hijo name={name} send={ShowMessage} update={updateName}></Hijo>
        </div>
    );
}
//al ponerle default, a la hora de importarlo en App.js 
//No se deben colocar llaves dentro del nombre que recibira el componete.
export default Padre;
