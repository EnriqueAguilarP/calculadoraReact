import React from "react";
import  '../hojaEstilos/clear.css'
function BotonClear(props){

    return(
        <div className="boton-clear">
            {props.children}
        </div>
    );
}

export default BotonClear;