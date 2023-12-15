import { useState } from "react";

// * Formulario sencillo
/* function Formularios() {
  const [name, setName] = useState("");
  const [taste, setTaste] = useState("");
  const [language, setLanguage] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Formulario enviado.");
    console.log(name, taste, language, terms);
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <p>Elige tu sabor JavaScript favorito:</p>
        <input
          type="radio"
          name="taste"
          id="vanilla"
          value="vanilla"
          onChange={(event) => setTaste(event.target.value)}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          name="taste"
          id="react"
          value="react"
          onChange={(event) => setTaste(event.target.value)}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          name="taste"
          id="angular"
          value="angular"
          onChange={(event) => setTaste(event.target.value)}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          name="taste"
          id="vue"
          value="vue"
          onChange={(event) => setTaste(event.target.value)}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          name="taste"
          id="svelte"
          value="svelte"
          onChange={(event) => setTaste(event.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>

        <p>Elige tu lenguaje de programación favorito</p>
        <select
          name="language"
          onChange={(event) => setLanguage(event.target.value)}
          defaultValue=""
        >
          <option value="">---</option>
          <option value="javascript">Javascript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
          <option value="go">GO</option>
          <option value="ruby">Ruby</option>
        </select>

        <br />

        <label htmlFor="terms">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={(event) => setTerms(event.target.checked)}
        />

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
} */

// Formulario Optimizado
function Formularios() {
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

    console.log("Formulario enviado.");
    console.log(form);
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" onChange={handleChange} />

        <p>Elige tu sabor JavaScript favorito:</p>
        <input
          type="radio"
          name="taste"
          id="vanilla"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          name="taste"
          id="react"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          name="taste"
          id="angular"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          name="taste"
          id="vue"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          name="taste"
          id="svelte"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>

        <p>Elige tu lenguaje de programación favorito</p>
        <select name="language" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="javascript">Javascript</option>
          <option value="php">PHP</option>
          <option value="python">Python</option>
          <option value="go">GO</option>
          <option value="ruby">Ruby</option>
        </select>

        <br />

        <label htmlFor="terms">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          onChange={handleChecked}
        />

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}

export default Formularios;

