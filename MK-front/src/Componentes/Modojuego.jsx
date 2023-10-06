import React from 'react';

const buttonStyles = {
  backgroundColor: '#0074d9', // Color de fondo
  color: 'white', // Color del texto
  padding: '10px 20px', // Espaciado dentro del botón
  borderRadius: '5px', // Borde redondeado
  fontSize: '16px', // Tamaño del texto
  cursor: 'pointer', // Cursor al pasar por encima
  border: 'none', // Sin borde
  outline: 'none', // Sin contorno
  marginRight: '10px', // Espacio entre los botones
};

const Modo = () => {
  return (
    <div className="container">
      <img
        src="MK-front/src/images/WhatsApp Image 2023-10-04 at 8.42.18 PM.png" // Reemplaza 'tu-imagen-de-fondo.jpg' con la URL o ruta de tu imagen de fondo
        alt=""
        className="background-image"
      />
      <button style={buttonStyles} id="torneo-button">Torneo</button>
      <button style={buttonStyles} id="invasion-button">Invasión</button>
    </div>
  );
}

export default Modo;


