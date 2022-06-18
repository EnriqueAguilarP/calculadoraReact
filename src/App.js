import logo from './imagenes/logo.png'; 
import './App.css';
import Boton from './componentes/boton';

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
          <div className='fila'>
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
          </div>
          <div className='fila'>
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
          </div>
          <div className='fila'>
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
          </div>
          <div className='fila'>
          
          </div>
          <div className='fila'>
            <Boton>Limpiar pantalla</Boton>
          </div>
      </div>
    </div>
  );
}

export default App;
