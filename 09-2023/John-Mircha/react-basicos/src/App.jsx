// import { CicloVida } from "./components/CicloVida";
// import AjaxApis from "./components/AjaxApis";
// import ScrollHooks from "./components/ScrollHooks";
import "./App.css";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import AjaxHooks from "./components/AjaxHooks";
import ContadorHooks from "./components/ContadorHooks";
import Estado from "./components/Estado";
import Padre from "./components/ComunicacionComponentes";
import Propiedades from "./components/Propiedades";
import RelojHooks from "./components/RelojHooks";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import Test from "./components/Test";

function App() {
  return (
    <>
      <section>
        <h1>React básicos con Vite</h1>
        <hr />
        <Propiedades
          cadena="Esto es una cadena de texto."
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ name: "Miguel", age: "37" }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={
            <Test msg="Soy un componente pasado como prop."></Test>
          }
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <Padre />
        <hr />
        {/* <CicloVida /> */}
        <hr />
        {/* <AjaxApis /> */}
        <hr />
        <ContadorHooks titulo="Contador de seguidores" />
        <hr />
        {/* <ScrollHooks /> */}
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
      </section>
    </>
  );
}

export default App;
