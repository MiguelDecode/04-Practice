import { useState, useEffect } from "react";

const Clock = ({ hour }) => <h3>{hour}</h3>;

function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let chrono;

    if (visible) {
      chrono = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(chrono);
    }

    return () => {
      console.log("Fase de desmontaje");
      clearInterval(chrono);
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible && <Clock hour={hour} />}
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Iniciar
      </button>
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Detener
      </button>
    </>
  );
}

export default RelojHooks;
