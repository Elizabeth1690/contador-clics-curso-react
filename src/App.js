import "./App.css";
import Boton from "./componentes/Boton";
import freeCodeCampLogo from "./imagenes/freecodecamp.png";
function App() {
  const manejarClic = () => {
    console.log("Clic");
  };

  const reiniciarContador = () => {
    console.log("Reiniciar");
  };
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor"></div>
      <img
        className="freecodecamp-logo"
        src={freeCodeCampLogo}
        alt="logo de freecodecamp"
      />
      <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
      <Boton
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
      />
    </div>
  );
}

export default App;
