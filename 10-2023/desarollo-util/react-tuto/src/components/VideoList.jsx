import styles from "./VideoList.module.css";

export const VideoList = ({ title, children }) => {
  return (
    <div className={`${styles.wrapper} ${styles.margin}`}>
      <h2>{title}</h2>
      {children || <p>No hay vídeos</p>}
    </div>
  );
};
