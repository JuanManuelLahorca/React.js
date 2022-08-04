import React, {useState} from 'react';
import propTypes from 'prop-types';
const GreetingF = (props) => {
    //[variable, metodo para actualizaarla] = useState (valor inicial);
    const [age, setage] = useState(34);
    const birthday = () => {
        // actualizamos el state
        setage(age + 1);
    }
    return (    
        <div>
            <h1>Hola { props.name} Desde componente funcional</h1>
            <h1>a vos también { props.namec}... Te Amo!</h1>
            <h2> Tu edad es de : {age } años </h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    );
}

GreetingF.propTypes = {
    name : propTypes.string,
    namec : propTypes.string,
};

export default GreetingF;
