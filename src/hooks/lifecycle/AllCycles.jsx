import React, { useEffect } from 'react';

const AllCycles = () => {

    //Solo tener un useEffect dentro de cada componente 
    useEffect(() => {
       console.log("componente creado");

        const intervalID = setInterval ( () => {
            document.title = `${new date()}`;
            console.log("actualizacion del componente")
        }, 1000);

        return () => {
           console.log("componente va a desaparecer");
           document.title = "tiempo detenido";
           clearInterval (intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
