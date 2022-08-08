import React, { useRef } from 'react';

const Hijo = ({ name, send, update }) => {

    const messageRef = useRef("");
    const nameRef = useRef("");

    function pressBtn() {
        const text = messageRef.current.value; 
        alert (`texto del input: ${text}`);
    }
    
    function pressBtnParams(text) {
        alert (`texto: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div>
            <p onMouseOver={()=> console.log("Mause por encima del componente")}>Hola { name }</p>
            <button onClick={() => console.log("Boton 1 pulsado")}>
                Boton 1
            </button>
            <button onClick={() => pressBtn()}>
                Boton 2
            </button>
            <button onClick={() => pressBtnParams("Hola")}> {/*dentro de una funcion anonima, sino entra a la funcion a penas se carga la pag */}
                Boton 3
            </button>
            <input 
                placeholder='mensaje para el padre'
                ref = {messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                enviar mensaje
            </button>
            <div>
                <form onSubmit={submitName}>
                    <input placeholder='nuevo nombre' ref={nameRef}/>
                    <button type='submit'>cambiar nombre</button>
                </form> 
            </div>
        </div>
    );
}

export default Hijo;
