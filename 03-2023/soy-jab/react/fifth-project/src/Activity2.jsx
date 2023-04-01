import React from "react";

export default function Activity2() {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];

  const remove = (event) => {
    event.target.parentNode.remove();
  };

  return (
    <div className="container">
      {reyes
        .filter((el) => !el.nombre.includes("g"))
        .map((rey) => (
          <div className="box" key={rey.nombre}>
            <span>{rey.nombre}</span>
            <button onClick={remove}>Borrar</button>
          </div>
        ))}
    </div>
  );
}
