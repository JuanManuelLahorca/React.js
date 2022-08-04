/**
 * Ejemplo de uso del metodo componentWillUnMount para componente clase
 * y ejemplo de uso de hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

 import React, { Component , useEffect } from 'react';

 export class WillUnMount extends Component {
 
     componentWillUnmount (){
         console.log("Comportaminento antes de que el componente desaparezca");
     }
 
     render() {
         return (
             <div>
                 <h1>WillUnMount</h1>
             </div>
         );
     }
 }
 
 
 export const WillUnMounttHook = () => {
 
     useEffect(() => {
         //aqui no ponemos nada
         return () => {
            console.log("Comportaminento antes de que el componente desaparezca");
         };
     },[]);// con corchetes vacios , se ejecuta una unica vez
 
     return (
         <div>
             <h1>WillUnMount</h1>
         </div>
     );
 }