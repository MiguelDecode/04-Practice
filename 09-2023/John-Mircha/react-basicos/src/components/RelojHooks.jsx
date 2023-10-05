import { useEffect, useState } from "react";

/* function Clock({ hour }) {
  return <h3>{hour}</h3>;
}

export default function RelojHooks() {
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
      // Error el desmontaje se produce en el componente Clock y no en RelojHooks
      console.log("Fase de desmontaje");
      clearInterval(chrono);
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible && <Clock hour={hour} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </>
  );
} */

export default function RelojHooks() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <h2>Reloj Hook</h2>
      {visible && <Clock />}
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Mostrar
      </button>
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Ocultar
      </button>
    </>
  );
}

function Clock() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("Fase de montaje");
    const timer = setInterval(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("Fase de desmontaje");
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h3>{hour}</h3>
    </>
  );
}
