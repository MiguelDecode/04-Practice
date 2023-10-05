import { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moviendo el Scroll");

    const detectarScroll = () =>
      setScrollY(Math.floor(document.documentElement.scrollTop));

    window.addEventListener("scroll", detectarScroll);

    return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);

  useEffect(() => {
    console.log("Fase de Montaje");
  }, []);

  useEffect(() => {
    console.log("Fase de Actualización");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del navegador: {scrollY}px</p>
    </>
  );
}
