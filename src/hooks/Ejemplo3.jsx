/**
 * ejemplo de hooks
 * - useState()
 * -useConterxt()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns componente1 
 * dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = React.createContext(null);
const Componente1 = () => {
    //inicializamos un estado vacio que va a rellenarse con los datos del contexto del padre
     const state = useContext(miContexto);
    return (
        <div>
            <h1> el token es : {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {
    const state = useContext(miContexto);
    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}


export default function MiComponenteConContexto() {
    const estadoInicial = {
        token : '12345',
        sesion : 1
    }

    //creamos el estado de este componente

    const [sesionData, setsesionData] = useState(estadoInicial);

    function actualizarSesion(){
        setsesionData(
           {
            token : 'JDAOIBFA',
            sesion : sesionData.sesion + 1
           }
        )
    }
  return (
   <miContexto.Provider value={sesionData}>
    {/*todo lo que esta aca puede leerlos datos de sesionData y ademas actualizarse */}
    <h1>Ejemplo de useState() y usecontext()</h1>
    <Componente1></Componente1>
    <button onClick={actualizarSesion}>Actualizar sesion</button>
   </miContexto.Provider>
  )
}

