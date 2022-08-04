/**
 * Ejemplo de componente de tipo clase que dispone
 * de los métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {
   constructor (props){
        super(props)
            console.log("CONSTRUCTOR: cuando se instancia el componente");
   }

   componenteWillMount(){
        console.log("WILLMOUNT: antes del montaje del componente");
   }

   componenteDidMount(){
        console.log("DIDMOUNT: justo al acabar el montaje del componente, antes de renderizarlo");
   }

   componenteWillReceiveProps(nextProps){
        console.log("WILLRECEIVEPROPS: si va a recibir nuevas props");
   }

   shouldComponentUpdate(nextProps, nextState){
        /**
        * controlar si el componente debe o no actualizarse
        * return true / false
        */
   }

   componentWillUpdate(nextProps, nextState){
        console.log("WILLUPDATE: justo antes de actualizarse");
   }

   componentDidUpdate(prevProps, pevState){
        console.log("DIDUPDATE: justo despues de actualizarse");
   }

   componentWillUnmount(){
        console.log("WILLUNMOUNT: justo antes de desmontarse");
   }

   render(){
        return (
            <div>

            </div>
        )
   }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
