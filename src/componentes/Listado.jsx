import React from "react";

const Listado = ({ datos }) => {
  return (
    <div>
      <h2>Listado de Personas</h2>

      <ul>
        {datos.map((persona) => (
          <li key={persona.id}> {persona.nombre} - {persona.edad} años </li>
        ))}
      </ul>
    </div>
  );
};

export default Listado;
