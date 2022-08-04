import React from 'react';
import PropTypes from 'prop-types';
import { Contact} from '../../models/contact.class.js';


const ComponenteB = ( { conectado } ) => {
    return (
        <div>        
                <h1> Contacto : { conectado  ?  'En linea':'No disponible' }</h1>         
        </div>
    );
}

ComponenteB.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};

export default ComponenteB;