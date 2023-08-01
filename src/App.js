import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0); // setNumClics la función que va permitir actualizarlo a numClics.

  const manejarClic = () => {
    setNumClics(numClics + 1); //setNumClics va actualizar ese estado numClics + 1. se renderiza.
  }; //Trabajamos con los Hooks, son funciones especiales que permite usar características poderosas de react con componentes funcionales ejem: useState, permite agregarle un estado a un componente funcional.

  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic} />

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}
//valor {numClics} que sea dinámico, y lo pasamos como props.
export default App;
