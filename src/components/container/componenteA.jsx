import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ComponenteB from '../pure/componenteB';

const ComponenteA = () => {
    const contacto = new Contact ( 'juan', 'lahorca', 'j@gmail.com',false);
    return (    
        <div>
            <h2>nombre : {contacto.nombre}</h2>
            <h2>apellido : {contacto.apellido}</h2>
            <h2>email : {contacto.email}</h2>
            <h2><ComponenteB conectado = {contacto.conectado}></ComponenteB></h2>
        </div>
    );
}

ComponenteA.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ComponenteA;
