// eslint-disable-next-line no-unused-vars
import React, { useState }  from 'react';
import "../Estilos/invasion.css";
import { reinos } from "../Data/Reinos";
import { characterslore } from '../Data/Characterslore';
import { Link } from "react-router-dom";
import Boton from "./Boton";

const CharactersLore = () => {
    const [selectedReino, setSelectedReino] = useState(null);
    const [AllCharacterslore, setAllCharacterslore] = useState(null);
    // const [selectedCampeonObjetivo, setSelectedCampeonObjetivo] = useState(null);

    const handlereinoselect = (Reino) => {
        setSelectedReino(Reino);
        setAllCharacterslore(null);
        // setSelectedCampeonObjetivo(null);
    };

  return (
    <div className="container1">
    <h1 className="Titulo">Selecciona un Reino.</h1>
    <ul className="realm-list2">
      {reinos.map((Reino) => (
        <li
          key={Reino.id}
          onClick={() => handlereinoselect(Reino)}
          className={selectedReino === Reino ? "selected-reino" : ""}
        >
          <img
            id="reinos"
            src={`/src/Images/${Reino.image}`}
            alt={Reino.name}
            className="realm-image" />
          <br />
          <b>{Reino.name}</b>
        </li>
      ))}
    </ul>
    {selectedReino && (
      <div>
        {selectedReino && !AllCharacterslore && (
          <div>
            <h1 className="Titulo">Lore de cada campeon del reino.</h1>
            <ul className="character-lista">
              {characterslore
                .filter((character) => character.realm === selectedReino.name)
                .map((character) => (
                  <li
                    key={character.id}
                    className={AllCharacterslore === character ? "selected-campeon" : ""}
                  >
                    <img
                      id="person"
                      src={`/src/Images/${character.image}`}
                      alt={character.name}
                      className="realm-image" />
                    <br></br>
                    <b>{character.name}</b>
                    <br></br>
                    <p style={{ fontSize: '12px' }}> <b>Historia:</b> {character.history}</p>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    )}
    <Link to="/">
      <Boton Nombre="Regresar" />
    </Link>
  </div>
  );
}

export default CharactersLore;
