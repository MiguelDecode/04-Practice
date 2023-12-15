import "./Estilos.css";
import styles from "./Estilos.module.css";
import "./Estilos.scss";

function Estilos() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="styles">
      <h2>Estilos CSS en React</h2>

      <h3 className="bg-react">Estilos en hoja CSS externa.</h3>
      
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en línea dentro de React.
      </h3>

      <h3 className="bg-react" style={myStyles}>
        Estilos en propiedad del componente.
      </h3>

      <h3 className="bg-react">
        Agregando Normalize con <br />
        <code>@import-normalize</code>
      </h3>

      <h3>Estilos con módulos</h3>
      <button className={styles.success}>Aceptar</button>
      <button className={styles.error}>Declinar</button>

      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}

export default Estilos;
