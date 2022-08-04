/**
 * componente que va acontener un formulario
 *  para autentificacion de usuarios
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = [
        user : "",
        pasword : ""
    ];
    
    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
