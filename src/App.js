import React from 'react';
import logo from './imagenes/logo.png'; 
import './App.css';
import Boton from './componentes/boton';
import BotonClear from './componentes/clear';
import Pantalla from './componentes/pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () =>{
    if (input){
      setInput(evaluate(input));
    } else{
      alert('Por favor ingresa valores para hacer cálculos')
    }
    
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          src={logo}
          className='logo-imagen'
          alt='Logo de Calculadora'
        />
      </div>
      <div className='contenedor-calculadora'>
          <Pantalla input = {input} />
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>1</Boton>
            <Boton manejarClick = {agregarInput}>2</Boton>
            <Boton manejarClick = {agregarInput}>3</Boton>
            <Boton manejarClick = {agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>4</Boton>
            <Boton manejarClick = {agregarInput}>5</Boton>
            <Boton manejarClick = {agregarInput}>6</Boton>
            <Boton manejarClick = {agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {agregarInput}>7</Boton>
            <Boton manejarClick = {agregarInput}>8</Boton>
            <Boton manejarClick = {agregarInput}>9</Boton>
            <Boton manejarClick = {agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick = {calcularResultado}>=</Boton>
            <Boton manejarClick = {agregarInput}>0</Boton>
            <Boton manejarClick = {agregarInput}>.</Boton>
            <Boton manejarClick = {agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear = {() => setInput('')}>
              Limpiar pantalla
            </BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
