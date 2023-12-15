import { useFetch } from "../hooks/useFetch.js";

function CustomHooks() {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h2>Data:</h2>
      <ul>{JSON.stringify(data)}</ul>
      <h2>Estado pendiente de la petición:</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h2>Error:</h2>
      <h3>{JSON.stringify(error)}</h3>
    </>
  );
}

export default CustomHooks;
