import React, { useState } from 'react';

//definiendo estilos en constantes
// estilos para el usuario logeado
const loggedStyle = {
    color : 'blue'
}
//sino esta logeado
const unloggedStyle = {
    color : 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
    //generamos un estado para el componente y asi controlar si el usuario esta o no logeado
    const [logged, setLogged] = useState(false);
    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            { logged ? (<p>hola, {props.name}</p>) : (<p>Porfavor, loguearse</p>) }
            <button onClick={()=>{
                console.log('boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }
            </button>
        </div>
    );
}

export default GreetingStyled;
