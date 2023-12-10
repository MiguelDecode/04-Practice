import styles from "./EmojiPicker.module.scss";

function EmojiButton({ emoji, onClick }) {
  const handleClick = () => {
    onClick(emoji);
  };

  return <button className={styles.EmojiButton} onClick={handleClick}>{emoji.symbol}</button>;
}

export default EmojiButton;
