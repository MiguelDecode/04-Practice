import "./App.css";
import Propiedades from "./components/Propiedades";
import Test from "./components/Test";

function App() {
  return (
    <>
      <h1>React básicos con Vite</h1>
      <hr />
      <section>
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
      </section>
    </>
  );
}

export default App;
