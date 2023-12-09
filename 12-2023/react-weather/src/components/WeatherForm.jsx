import { useState } from "react";
import styles from "./WeatherForm.module.css";

function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    if (value !== "") {
      setCity(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onChangeCity(city);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input className={styles.input} type="text" onChange={handleChange} />
    </form>
  );
}

export default WeatherForm;
