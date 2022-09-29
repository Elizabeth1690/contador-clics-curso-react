import "./App.css";
import freeCodeCampLogo from "./imagenes/FreeCodeCamp.png";
function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor"></div>
      <img
        className="freecodecamp-logo"
        src={freeCodeCampLogo}
        alt="logo de freecodecamp"
      />
    </div>
  );
}

export default App;
