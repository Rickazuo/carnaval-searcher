import styles from "./styles.module.css";
import location from "../../assets/location.svg";

export default function Card({ image }) {
    return (
        <div className={styles.elementGrid}>
            <img width="100%" src={image} alt="random image" />
            <div className={styles.titleResults}>Titulo</div>
            <div className={styles.bodyResults}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti ipsum repudiandae beatae, qui officia consectetur esse!
                Aperiam adipisci vero, officiis id laborum quam repudiandae
                doloribus eos vel, tempora impedit quibusdam.
            </div>
            <div className={styles.localizationResults}>
                <img src={location} alt="" />
                Localização
            </div>
        </div>
    );
}
