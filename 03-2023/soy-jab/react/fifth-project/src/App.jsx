import "./App.css";
import ListOfKings from "./ListOfKings";
import Activity2 from "./Activity2";
import Activity3 from "./Activity3";
import Activity4 from "./Activity4";

function App() {
  return (
    <div className="App">
      <h1 className="title">Actividades</h1>
      <h2>Actividad 1</h2>
      <ListOfKings />
      <h2>Actividad 2</h2>
      <Activity2 />
      <h2>Actividad 3</h2>
      <Activity3 />
      <h2>Actividad 4</h2>
      <Activity4 />
    </div>
  );
}

export default App;
