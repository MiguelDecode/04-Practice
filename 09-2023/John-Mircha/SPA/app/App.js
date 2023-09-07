import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";

export function App() {
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Loader());
}
