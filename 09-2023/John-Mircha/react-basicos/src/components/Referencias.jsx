import { useRef } from "react";

export default function Referencias() {
  const refMenu = useRef();
  const refMenuBtn = useRef();

  // console.log(refMenu, refMenuBtn);

  /*   const handleToggleMenu = (event) => {
         const menuElement = document.getElementById("menu");
    if (event.target.textContent === "Menú") {
      event.target.textContent = "Cerrar";
      menuElement.style.display = "block";
    } else {
      event.target.textContent = "Menú";
      menuElement.style.display = "none";
    }
  }; */

  const handleToggleMenu = () => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button onClick={handleToggleMenu} ref={refMenuBtn}>
        Menú
      </button>
      <nav style={{ display: "none" }} ref={refMenu}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
      </nav>
    </>
  );
}
