import styles from './EmojiPicker.module.scss'

import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

function EmojiPickerInput() {
  const refInput = useRef(null);

  return (
    <div>
      <input className={styles.search} ref={refInput} />
      <EmojiPicker ref={refInput} />
    </div>
  );
}

export default EmojiPickerInput;
