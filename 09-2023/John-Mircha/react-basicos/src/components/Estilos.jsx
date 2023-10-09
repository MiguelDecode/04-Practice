import "./Estilos.css";
import moduleStyles from "./Estilos.module.css";
import "./Estilos.scss";

const Estilos = () => {
  const myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>

      <h3 className="bg-react">Estilos en hoja CSS externa</h3>

      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en línea (atributo style)
      </h3>

      <h3 className="bg-react" style={myStyles}>
        Estilos en línea (atributo con variable)
      </h3>

      <h3 className={moduleStyles.error}>Estilos con Módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con Módulos</h3>

      <h3 className="bg-sass">Estilos con Sass</h3>
    </section>
  );
};

export default Estilos;
