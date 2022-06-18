import React from "react";
import '../hojaEstilos/pantalla.css';
//Componente como funcion flecha, se asigna como constante y retorna valores con paréntesis
const Pantalla = ( { input }) => (
    <div className='input'>
        {input}
    </div>
)

export default Pantalla;