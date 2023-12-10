import { forwardRef, useState } from "react";
import { data as emojiList } from "./data";
import EmojiSearch from "./EmojiSearch";
import EmojiButton from "./EmojiButton";

import styles from "./EmojiPicker.module.scss";

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  const handleClickOpen = () => setIsOpen(!isOpen);

  const handleClickEmoji = (emoji) => {
    const cursorPos = inputRef.current.selectionStart;
    const text = inputRef.current.value;
    const prev = text.slice(0, cursorPos);
    const next = text.slice(cursorPos);

    inputRef.current.value = prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
    inputRef.current.focus();
    setIsOpen(false);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    if (query) {
      const search = emojiList.filter(
        (emoji) =>
          emoji.name.toLowerCase().includes(query) ||
          emoji.keywords.toLowerCase().includes(query)
      );

      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <button className={styles.emojiPickerButton} onClick={handleClickOpen}>
        😊
      </button>
      {isOpen ? (
        <div className={styles.emojiPickerContainer}>
          <EmojiSearch onSearch={handleSearch} />
          <div className={styles.emojiList}>
            {emojis.map((emoji) => (
              <EmojiButton
                key={emoji.symbol}
                emoji={emoji}
                onClick={handleClickEmoji}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);
