import styles from "./VideoItem.module.css";

export const VideoItem = ({ title, duration, uploadDate, description }) => {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60);

  return (
    <div className={styles.video}>
      <h3>{title}</h3>
      <div className={styles.time}>
        <span>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
        <span>{uploadDate.toLocaleDateString()}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

