import styles from "./App.module.css";
import VideoItem from "./components/VideoItem";
import VideoList from "./components/VideoList";

function App() {
  return (
    <div className={styles.container}>
      <div className="container">
        <VideoList title="Curso de React">
          <VideoItem
            title="Componentes"
            duration={2760}
            uploadDate={new Date(2022, 1, 25)}
            description="Componetes en React"
          ></VideoItem>

          <VideoItem
            title="useState"
            duration={3145}
            uploadDate={new Date(2022, 2, 3)}
            description="Cómo utilizar estados en React"
          ></VideoItem>
        </VideoList>

        <VideoList title="Curso de Node">
          <VideoItem
            title="Intro a Node Js"
            duration={2760}
            uploadDate={new Date(2022, 1, 25)}
            description="Introducción al backend con Node"
          ></VideoItem>
        </VideoList>

        <VideoList title="Curso de Next Js"></VideoList>
      </div>
    </div>
  );
}

export default App;
