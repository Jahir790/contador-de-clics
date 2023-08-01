import React from 'react';

function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic} // Event Listener o Oyente de eventos //Operador ternario
    >
      {texto}
    </button> //Sintaxis de Desestructuración
  );
}

export default Boton;
