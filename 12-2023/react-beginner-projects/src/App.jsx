import "./App.css";
import Accordion from "./Components/Accordion";
import Carrousel from "./Components/Carrousel";
import Quotes from "./Components/Quotes";

function App() {
  return (
    <>
      <Carrousel />
      <hr />
      <Accordion />
      <hr />
      <Quotes />
    </>
  );
}

export default App;
