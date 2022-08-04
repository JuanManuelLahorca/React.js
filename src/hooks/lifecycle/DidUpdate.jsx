/**
 * Ejemplo de uso de método componentdidupdate en componente clase
 * y uso de hook en componente funcional
 */

 import React, { Component , useEffect } from 'react';

 export class DidUpdate extends Component {
 
     componentDidUpdate (){
         console.log("Comportaminento cuando el componente recibe nuevos props o cambio en su estado privado");
     }
 
     render() {
         return (
             <div>
                 <h1>DidUpdate</h1>
             </div>
         );
     }
 }
 
 
 export const DidUpdatetHook = () => {
 
     useEffect(() => {
         console.log("Comportaminento cuando el componente recibe nuevos props o cambio en su estado privado")
         
     });   // sin corchetes , no hay limites. se ejecuta todas las veces que haya cambios en el estado y en props
 
     return (
         <div>
             <h1>DidUpdate</h1>
         </div>
     );
 }
 