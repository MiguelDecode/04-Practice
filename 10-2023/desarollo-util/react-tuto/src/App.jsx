import "./App.css";
import { CounterClean } from "./components/CounterClean";
// import { CounterUseEffect } from "./components/CounterUseEffect";
// import { Counter } from "./components/Counter";
// import { Form } from "./components/Form";
// import { VideoItem } from "./components/VideoItem";
// import { VideoList } from "./components/VideoList";

function App() {
  return (
    <>
      {/* <Counter initialLikes={12} /> */}
      {/* <Form /> */}
      {/* <CounterUseEffect /> */}
      <CounterClean />
    </>
    /*     <div className="container">
      <VideoList title="Curso de React">
        <VideoItem
          title="Componentes"
          duration={2760}
          uploadDate={new Date(2022, 1, 25)}
          description="Componentes en React"
        />

        <VideoItem
          title="useState"
          duration={3145}
          uploadDate={new Date(2022, 2, 3)}
          description="Cómo utilizar estados en React"
        />
      </VideoList>

      <VideoList title="Curso de Node">
        <VideoItem
          title="Intro a Node Js"
          duration={2760}
          uploadDate={new Date(2022, 1, 25)}
          description="Introduccíon al backend con Node"
        />
      </VideoList>

      <VideoList title="Curso de Next JS"></VideoList>
    </div> */
  );
}

export default App;
