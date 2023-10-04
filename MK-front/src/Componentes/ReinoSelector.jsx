import React, { useState, useEffect } from "react";
import { reinos } from "../Data/Reinos";
import "../Estilos/ReinoSelector.css";

// Importa los datos de los personajes
import { characters } from "../Data/Characters";

function Reinoselector() {
  const [selectedReino, setSelectedReino] = useState(null);
  const [reinoCharacters, setReinoCharacters] = useState([]);

  const handlereinoselect = (Reino) => {
    setSelectedReino(Reino);
  };

  useEffect(() => {
    // Filtrar la lista de personajes por el reino seleccionado
    if (selectedReino) {
      const filteredCharacters = characters.filter(
        (character) => character.realm === selectedReino.name
      );
      setReinoCharacters(filteredCharacters);
    } else {
      // Si no se selecciona ningún reino, la lista de personajes está vacía
      setReinoCharacters([]);
    }
  }, [selectedReino]);

  return (
    <div className="container">
      <h1>Selecciona un Reino de Mortal Kombat</h1>
      <ul className="realm-list">
        {reinos.map((Reino) => (
          <li
            key={Reino.id}
            onClick={() => handlereinoselect(Reino)}
            className={selectedReino === Reino ? "selected-reino" : ""}
          >
            <img
              src={`/src/Images/${Reino.image}`} // Ruta de la imagen GIF
              alt={Reino.name}
              className="realm-image"
            />
            <br />
            <b>{Reino.name}</b>
          </li>
        ))}
      </ul>
      {selectedReino && (
        <div>
          <h2>Personajes del Reino {selectedReino.name}</h2>
          <ul className="character-list">
            {reinoCharacters.map((character) => (
              <li key={character.id}>
                <img
                  src={`/src/Images/${character.image}`} // Ruta de la imagen GIF
                  alt={character.name}
                  className="realm-image"
                />
                <br></br>
                <b>{character.name}</b>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Reinoselector;


