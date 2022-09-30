import React from "react";
import "../hojas-de-estilos/Boton.css";
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <div>
      <button
        className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
        onClick={manejarClic}
      >
        {texto}
      </button>
    </div>
  );
}

export default Boton;
