import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon/";

  const { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>La promesa esta pendiente: {JSON.stringify(isPending)}</h3>
      <h3>
        <mark>Error: {JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>Data retornada: {JSON.stringify(data)}</code>
        </pre>
      </h3>
    </>
  );
}
