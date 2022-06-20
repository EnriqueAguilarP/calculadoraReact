import logo from './imagenes/logo.png'; 
import './App.css';
import Boton from './componentes/boton';
import BotonClear from './componentes/clear';
import Pantalla from './componentes/pantalla';

function App() {
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
          <Pantalla />
          <div className='fila'>
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div>
          <div className='fila'>
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
          </div>
          <div className='fila'>
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>*</Boton>
          </div>
          <div className='fila'>
            <Boton>=</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear>Limpiar pantalla</BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
