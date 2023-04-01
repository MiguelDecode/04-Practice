import "./App.css";
import "./miCss.css";
import Twitch from "./twitch.png";

function App() {
  let nombre = "Miguel";
  let caja = <div>Nombre</div>;

  return (
    <div className="fondo">
      <h1>Curso de React</h1>
      <input type="text" />
      <input value={nombre}></input>
      <div>{nombre}</div>
      <div>{caja}</div>
      <img src={Twitch} alt="logo" className="logo"></img>
      <br />
    </div>
  );
}

export default App;
