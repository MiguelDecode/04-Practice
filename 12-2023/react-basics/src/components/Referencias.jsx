import { useRef } from "react";

function Referencias() {
  const refMenu = useRef();
  const refMenuBtn = useRef();

  console.log(refMenu, refMenuBtn);

  const handleToggleMenu = () => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }

    // * Manera no recomendada de manipular el DOM en React
    /*     const menuElement = document.getElementById("menu");
    if (event.target.textContent === "Menú") {
      event.target.textContent = "Cerrar";
      menuElement.style.display = "block";
    } else {
      event.target.textContent = "Menú";
      menuElement.style.display = "none";
    } */
  };

  return (
    <>
      <h2>Referencias en React</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#">Seccion-1</a>
        <br />
        <a href="#">Seccion-2</a>
        <br />
        <a href="#">Seccion-3</a>
        <br />
        <a href="#">Seccion-4</a>
        <br />
        <a href="#">Seccion-5</a>
      </nav>
    </>
  );
}

export default Referencias;
