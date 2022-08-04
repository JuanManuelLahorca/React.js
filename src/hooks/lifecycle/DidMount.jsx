/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component , useEffect } from 'react';

export class Didmount extends Component {

    componentDidMount (){
        console.log("Comportaminento antes de que el componente sea añadido al DOM (renderice)");
    }

    render() {
        return (
            <div>
                <h1>DidiMount</h1>
            </div>
        );
    }
}


export const DidmountHook = () => {

    useEffect(() => {
        console.log("Comportaminento antes de que el componente sea añadido al DOM (renderice)")
        
    }, []); // corchetes vacio (lista vacia), solo lo hace una vez..

    return (
        <div>
            <h1>DidiMount</h1>
        </div>
    );
}


