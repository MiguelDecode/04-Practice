import "./App.css";
import ContactForm from "./components/ContactForm";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SelectsAnidados from "./components/SelectsAnidados";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <main style={{ maxWidth: "1024px", marginInline: "auto" }}>
      <h1>Ejercicios con React</h1>
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </main>
  );
}

export default App;
