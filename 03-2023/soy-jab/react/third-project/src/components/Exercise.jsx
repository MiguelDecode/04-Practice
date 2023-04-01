import React, { useRef } from "react";

function Exercise() {
  const kings = [
    {
      name: "Ataúlfo",
      hobby: "Comer toros sin pelar",
    },
    {
      name: "Recesvinto",
      hobby: "Leer a Hegel",
    },
    {
      name: "Teodorico",
      hobby: "ver documentales de la tele",
    },
  ];

  const sentence = useRef(null);

  let counter = 0;

  const mostrar = () => {
    if (counter === 3) counter = 0;

    sentence.current.innerHTML = `La afición principal de <span style="color: red">${kings[counter].name}</span> es <span style="color: green">${kings[counter].hobby}</span>`;

    counter++;
  };

  return (
    <>
      <button onClick={mostrar}>Ver siguiente</button>
      <p ref={sentence}></p>
    </>
  );
}

export default Exercise;
