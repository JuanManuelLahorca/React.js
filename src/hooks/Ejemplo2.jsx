/**
 * uso de hooks combinados
 * -useState()
 * useRef() ---> identifica valores
 * useEffect() ---> controla cambio de la vista
 */

import React, { useState, useRef, useEffect } from 'react';


const Ejemplo2 = () => {
    //creamos dos contadores en dos estados distintos

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //creamos referencias con useRef() para asociar varialbe con elemento DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1 (){
        setContador1(contador1 + 1);
    }

    function incrementar2 (){
        setContador2(contador2 + 1);
    }

    /**
     * useEffect()
     * caso 1: ejecutar siempre un snippet de codigo 
     * cada vez que hay un cambio en estado de componente
     * se ejecuta aquello que este dentro del useEffect()
     */

    //useEffect(() => {
    //    console.log('Cambio en el estado del componente');
    //    console.log('Mostrando referencia al elemento del DOM');
    //    console.log(miRef);
    //});

    /**
     * useEffect()
     * caso 2: ejecutar solo cuando cambie contador1
     * cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
     * en caso de cambiar contador2, no habra ejecucion
     * si hay varios useEffect(), el ultimo se ejecuta
     */

    // useEffect(() => {
    //        console.log('Cambio en el estado del contador1');
    //        console.log('Mostrando referencia al elemento del DOM');
    //        console.log(miRef);
    //    }, [contador1]);

            /**
     * useEffect()
     * caso 3: ejecutar solo cuando cambie contador1 o contador2
     * cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEffect()
     * en caso de cambiar contador2, no habra ejecucion
     * si hay varios useEffect(), el ultimo se ejecuta
     */

     useEffect(() => {
        console.log('Cambio en el estado del contador1/contador2');
        console.log('Mostrando referencia al elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);
    return (
        <div>
            <h1>***Ejemplo de useState(), useRef(), useEffect()***</h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
            {/*elemento refenciado */}
            <h4 ref= {miRef}> Ejemplo de elemento referenciado </h4>
            <div>
                <button onClick={incrementar1}>incrementar contador 1</button>
                <button onClick={incrementar2}>incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
