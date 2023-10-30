import React, { useState } from "react";
import { reinos } from "../Data/Reinos";
import { characters } from "../Data/Characters";
import Boton from "./Boton";
import { Link } from "react-router-dom";
import "../Estilos/ReinoSelector.css";

export function Reinoselector() {
  const [selectedReino, setSelectedReino] = useState(null);
  const [selectedCampeonAtacante, setSelectedCampeonAtacante] = useState(null);
  const [selectedReinoObjetivo, setSelectedReinoObjetivo] = useState(null);
  const [selectedCampeonObjetivo, setSelectedCampeonObjetivo] = useState(null);
  const [torneoGanador, setTorneoGanador] = useState(null);
  const [empate, setEmpate] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [torneoIniciado, setTorneoIniciado] = useState(false);
  const [torneoReiniciado, setTorneoReiniciado] = useState(false);
  const [habilidadesGanador, setHabilidadesGanador] = useState([]);
  const [fatalitiesGanador, setfatalitiesGanador] = useState([]);

  const handlereinoselect = (Reino) => {
    setSelectedReino(Reino);
    setSelectedCampeonAtacante(null);
    setSelectedCampeonObjetivo(null);
    setSelectedReinoObjetivo(null);
    setTorneoGanador(null);
    setEmpate(false);
    setResultados([]);
    setTorneoIniciado(false);
    setTorneoReiniciado(false);
  };

  const handleCampeonAtacanteSelect = (campeon) => {
    setSelectedCampeonAtacante(campeon);
  };

  const handleReinoObjetivoSelect = (Reino) => {
    setSelectedReinoObjetivo(Reino);
    setSelectedCampeonObjetivo(null);
  };

  const handleCampeonObjetivoSelect = (campeon) => {
    setSelectedCampeonObjetivo(campeon);
  };

  const iniciarTorneo = () => {
    setTorneoIniciado(true);
    determinarGanador();
  };

  // Función para determinar el ganador del torneo
  const determinarGanador = () => {
    if (selectedCampeonAtacante && selectedCampeonObjetivo) {
      const fuerzaCampeonAtacante = selectedCampeonAtacante.strength;
      const defensaCampeonObjetivo = selectedCampeonObjetivo.defense;

      if (fuerzaCampeonAtacante > defensaCampeonObjetivo) {
        setTorneoGanador(selectedCampeonAtacante.name);
        setHabilidadesGanador(selectedCampeonAtacante.habilidades);
        setfatalitiesGanador(selectedCampeonAtacante.fatalities);
        setEmpate(false);
      } else if (fuerzaCampeonAtacante < defensaCampeonObjetivo) {
        setTorneoGanador(selectedCampeonObjetivo.name);
        setHabilidadesGanador(selectedCampeonObjetivo.habilidades);
        setfatalitiesGanador(selectedCampeonObjetivo.fatalities);
        setEmpate(false);
      } else {
        setTorneoGanador(null);
        setHabilidadesGanador([]);
        setfatalitiesGanador([]);
        setEmpate(true);
      }
    }
  };

  const calcularResultados = () => {
    if (selectedCampeonAtacante && selectedCampeonObjetivo) {
      determinarGanador();

      // Resultados del torneo
      const resultadosTorneo = [];

      if (torneoGanador) {
        resultadosTorneo.push(`Tu Campeon: ${selectedCampeonAtacante.name}`);
        resultadosTorneo.push(`Campeon Enemigo: ${selectedCampeonObjetivo.name}`);
        resultadosTorneo.push(`El Ganador es: ${torneoGanador}`);
      } else if (empate) {
        resultadosTorneo.push("Empate");
      }

      setResultados(resultadosTorneo);
    }
  };

  return (
    <div className="container1">
      <h1 className="Titulo">Selecciona Tu Reino.</h1>
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
          {selectedReino && !selectedCampeonAtacante && !torneoReiniciado && (
            <div>
              <h1 className="Titulo">Selecciona Tu Campeón Como Atacante.</h1>
              <ul className="character-list">
                {characters
                  .filter((character) => character.realm === selectedReino.name)
                  .map((character) => (
                    <li
                      key={character.id}
                      onClick={() => handleCampeonAtacanteSelect(character)}
                      className={selectedCampeonAtacante === character ? "selected-campeon" : ""}
                    >
                      <img
                        id="person"
                        src={`/src/Images/${character.image}`}
                        alt={character.name}
                        className="realm-image" />
                      <br></br>
                      <b>{character.name}</b>
                    </li>
                  ))}
              </ul>
            </div>
          )}
          {selectedCampeonAtacante && !selectedReinoObjetivo && !torneoReiniciado && (
            <div>
              <h1 className="Titulo">Selecciona El Reino Que Quieres Atacar.</h1>
              <ul className="realm-list2">
                {reinos
                  .filter((Reino) => Reino !== selectedReino)
                  .map((Reino) => (
                    <li
                      key={Reino.id}
                      onClick={() => handleReinoObjetivoSelect(Reino)}
                      className={selectedReinoObjetivo === Reino ? "selected-reino" : ""}
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
            </div>
          )}
          {selectedCampeonAtacante && selectedReinoObjetivo && !torneoReiniciado && (
            <div>
              <h1 className="Titulo">Selecciona el Campeon que quieres atacar.</h1>
              <ul className="character-list">
                {characters
                  .filter((character) => character.realm === selectedReinoObjetivo.name)
                  .map((character) => (
                    <li
                      key={character.id}
                      onClick={() => handleCampeonObjetivoSelect(character)}
                      className={selectedCampeonObjetivo === character ? "selected-campeon" : ""}
                    >
                      <img
                        id="person"
                        src={`/src/Images/${character.image}`}
                        alt={character.name}
                        className="realm-image" />
                      <br></br>
                      <b>{character.name}</b>
                    </li>
                  ))}
              </ul>
              {selectedCampeonObjetivo && (
                <Boton onClick={() => iniciarTorneo()} Nombre="Iniciar Torneo" />
              )}
            </div>
          )}
        </div>
      )}
      {torneoIniciado && (
        <div>
          <Boton onClick={() => calcularResultados()} Nombre="Ver Resultados del Torneo" />
          <Boton
        onClick={() => window.location.reload()}
        Nombre="Reiniciar"
      />
        </div>
        
      )}
      {resultados.length > 0 && (
        <div>
          <h2 className="Titulo">Resultados del Torneo</h2>
          <ul className="resultado-list">
            {resultados.map((resultado, index) => (
              <li
                key={index}
                style={{
                  color: resultado.includes("Empate")
                    ? "orange"
                    : resultado.includes(selectedCampeonAtacante.name)
                      ? "green"
                      : "red",
                }}
              >
                {resultado}
                {resultado === `El Ganador es: ${torneoGanador}` && (
                  <div>
                    <b>Habilidades del Campeón Ganador:</b>
                    <ul>
                      {habilidadesGanador.map((habilidad, i) => (
                        <li key={i}>{habilidad}</li>
                      ))}
                    </ul>
                    <b>Fatalities:</b>
                    <ul>
                      {fatalitiesGanador.map((fatality, i) => (
                       <li key={i}>{fatality}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/">
        <Boton Nombre="Regresar" />
      </Link>
    </div>
  );
}
