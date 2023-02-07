// Es muy importante en vanilla js poner el nombre de la extensión cuando importamos.
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;

  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
}
