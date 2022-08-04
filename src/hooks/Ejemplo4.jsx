/**
 * props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de Children Props!</h1>
            <h2> nombre: {props.nombre}</h2>
            {/*props.children pintra por defecto aquello que se
            encuentre entre las etiquetas deeste componente
            desde el componente de orden superior */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;

