/*
Ejemplo de uso de Hooks UseState
Crear un componente de tipo funcion, accdeder a su estado privado mediante hooks 
y modificarlo
*/

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;
    //valor inicial para una persona
    const personaInicial = {
        nombre : 'juan',
        email : 'juan@gmail.com'
    }

    /**
     * ValorInicial y personaInicial sean parte del estado del componente
     * gestinamos su cambio y este se ve reflejado en la vista del componente.
     * 
     * const = [nombreVariable, funcionParaCambiar] = useState (valorInicial)
     */

    const [contador, setcontador] = useState(valorInicial);
   const [persona, setpersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */

    function incrementarContador(){
        setcontador(contador + 1);
    }
      /**
     * Funcion para actualizar el estado de persona en el componente
     */

    function actualizarPersona(){
        setpersona(
            {
                nombre : 'sol',
                email : 'sol@gmail.com'
            }
        )
    }
    return (
        <div>
            <h1>***Ejemplo de useState()***</h1>
            <h2>Contador : {contador}</h2>
            <h2>Persona: {persona.nombre}, {persona.email}</h2>
            {/*Botonoes para actualizar los estados */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}> Actualizar datos de la persona</button>
        </div>
    );
}

export default Ejemplo1;
