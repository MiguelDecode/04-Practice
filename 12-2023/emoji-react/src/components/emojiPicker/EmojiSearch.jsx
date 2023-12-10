import styles from "./EmojiPicker.module.scss";

import { useState } from "react";

function EmojiSearch({ onSearch }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onSearch(event);
  };

  return (
    <input
      className={styles.search}
      type="text"
      onChange={handleChange}
      value={value}
    />
  );
}

export default EmojiSearch;
