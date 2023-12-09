import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";

function App() {
  return (
    <>
      <section>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </section>

      <h1>Vite + React</h1>

      <hr />

      <section>
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <Padre/>
      </section>
    </>
  );
}

export default App;
