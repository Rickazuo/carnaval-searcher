import styles from "./styles.module.css";

export default function Search({ locations }) {
  debugger;
  return (
    <div className={styles.bannerButton}>
      <div className={styles.buttons}>
        <input placeholder="Pesquise por nome" />
        <select name="city drop down" id="">
          <option id="" value="" disabled selected hidden>
            Selecione uma cidade
          </option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <button className={styles.searchNow}>BUSCAR AGORA</button>
      </div>
    </div>
  );
}
