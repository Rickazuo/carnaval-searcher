import styles from "./styles.module.css";
import location from "../../assets/location.svg";

export default function Card({ image, title, body, localization }) {
  return (
    <div className={styles.elementGrid}>
      <img width="100%" src={image} alt="blocks images" />
      <div className={styles.titleResults}>{title}</div>
      <div className={styles.bodyResults}>{body}</div>
      <div className={styles.localizationResults}>
        <img src={location} alt="" />
        {localization}
      </div>
    </div>
  );
}
