import styles from "./styles.module.css";

export default function Search() {
    return (
        <div className={styles.bannerButton}>
            <div className={styles.buttons}>
                <input placeholder="Pesquise por nome" />
                <select name="city drop down" id="">
                    <option id="" value="" disabled selected hidden>
                        Selecione uma cidade
                    </option>
                </select>
                <button className={styles.searchNow}>BUSCAR AGORA</button>
            </div>
        </div>
    );
}
