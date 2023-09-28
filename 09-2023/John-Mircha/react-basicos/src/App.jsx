import "./App.css";
import Estado from "./components/Estado";
import { EventosES6, EventosES7 } from "./components/Eventos";
import Propiedades from "./components/Propiedades";
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
      </section>
    </>
  );
}

export default App;
