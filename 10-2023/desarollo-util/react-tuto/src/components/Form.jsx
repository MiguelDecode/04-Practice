import { useState } from "react";

export const Form = () => {
  const [search, setSearch] = useState("");

  if (search === "reset") setSearch("Reset del input");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="search"
          autoComplete="off"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <p>Resultados para: {search}</p>
    </>
  );
};
