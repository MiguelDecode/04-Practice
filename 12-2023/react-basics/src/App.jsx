import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import Contador from "./components/Contador";
// import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import CustomHooks from "./components/CustomHooks";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";

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
        <Padre />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
        <hr />
        <Contador title="seguidores" />
        <hr />
        <h2>Contenido no visible</h2>
        {/* <ScrollHooks /> */}
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <CustomHooks />
        <hr />
        <Referencias />
        <hr />
        <Formularios />
        <hr />
        <Estilos />
        <hr />
      </section>
    </>
  );
}

export default App;