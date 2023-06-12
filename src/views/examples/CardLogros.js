import React from 'react';

const CardLogros = ({ backgroundImage }) => {
  const estiloCarta = {
    backgroundImage: `url(${backgroundImage})`,
    // ...otros estilos de la carta
  };

  return <div className="cardLogros" style={estiloCarta}></div>;
};

export default CardLogros;
