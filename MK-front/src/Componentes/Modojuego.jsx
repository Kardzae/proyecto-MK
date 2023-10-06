import React from 'react';
import '../Estilos/modo.css';
import {useNavigate} from 'react-router-dom';

const Modo = () => {
  const goPage = useNavigate();

  function goPageSelector(){
    goPage('/seleccionar');
  }

  return (
    <div className="container-seleccion-juego">
      <button id="torneo-button" onClick={goPageSelector}>Torneo</button>
      <button id="invasion-button">Invasión</button>
    </div>
  );
}

export default Modo;


