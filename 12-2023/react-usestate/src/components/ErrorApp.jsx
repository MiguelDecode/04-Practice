import { useState } from "react"

function ErrorApp() {
  const [error, setError] = useState('')

  return (
    <>
      <h2>ErrorApp</h2>
      <button onClick={() => setError("Error al traer de la API")}>Error button</button>
      <button onClick={() => setError("Credenciales incorrectos")}>Error button</button>
      <button onClick={() => setError("")}>Borrar todos los errores</button>
      {error && <h3>{error}</h3>}
    </>
  )
}

export default ErrorApp
