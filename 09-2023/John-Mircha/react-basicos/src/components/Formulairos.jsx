import { useState } from "react";

// const Formulairos = () => {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("El formulario se ha enviado");
//   };

//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Input */}
//         <label htmlFor="nombre">Nombre:</label>
//         <input
//           type="text"
//           name="nombre"
//           id="nombre"
//           value={nombre}
//           onChange={(event) => setNombre(event.target.value)}
//         />

//         {/* Radio */}
//         <p>Elige tu sabor JavaScript Favorito</p>
//         <input
//           type="radio"
//           name="sabor"
//           id="vanilla"
//           value="vanilla"
//           onChange={(event) => setSabor(event.target.value)}
//           defaultChecked
//         />
//         <label htmlFor="vanilla">Vanilla</label>

//         <input
//           type="radio"
//           name="sabor"
//           id="react"
//           value="react"
//           onChange={(event) => setSabor(event.target.value)}
//         />
//         <label htmlFor="react">React</label>

//         <input
//           type="radio"
//           name="sabor"
//           id="angular"
//           value="angular"
//           onChange={(event) => setSabor(event.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>

//         <input
//           type="radio"
//           name="sabor"
//           id="vue"
//           value="vue"
//           onChange={(event) => setSabor(event.target.value)}
//         />
//         <label htmlFor="vue">Vue</label>

//         {/* Selects */}
//         <p>Elige tu lenguaje de programación favorito</p>
//         <select
//           defaultValue=""
//           name="lenguaje"
//           onChange={(event) => setLenguaje(event.target.value)}
//         >
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>

//         {/* Checkbox */}
//         <input
//           type="checkbox"
//           name="terminos"
//           id="terminos"
//           onChange={(event) => setTerminos(event.target.checked)}
//         />
//         <label htmlFor="terminos">Acepto términos y condiciones</label>

//         <input type="submit" value="Enviar" />
//       </form>
//     </>
//   );
// };

/* Improved Form */
const Formulairos = () => {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleChecked = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("El formulario se ha enviado");
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        {/* Input */}
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={form.nombre ?? ''}
          onChange={handleChange}
        />

        {/* Radio */}
        <p>Elige tu sabor JavaScript Favorito</p>
        <input
          type="radio"
          name="sabor"
          id="vanilla"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>

        <input
          type="radio"
          name="sabor"
          id="react"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>

        <input
          type="radio"
          name="sabor"
          id="angular"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>

        <input
          type="radio"
          name="sabor"
          id="vue"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>

        {/* Selects */}
        <p>Elige tu lenguaje de programación favorito</p>
        <select defaultValue="" name="lenguaje" onChange={handleChange}>
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>

        {/* Checkbox */}
        <input
          type="checkbox"
          name="terminos"
          id="terminos"
          onChange={handleChecked}
        />
        <label htmlFor="terminos">Acepto términos y condiciones</label>

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Formulairos;
