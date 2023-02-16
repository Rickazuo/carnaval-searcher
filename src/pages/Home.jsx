import styles from "./styles.module.css";

import feathers from "../assets/feathers.svg";
import dancer from "../assets/dancer.svg";

function App() {
  return (
    <body>
      <div className={styles.headerContainer}>
        <img
          className={styles.feathers}
          src={feathers}
          alt="background feathers image"
        />
        <div className={styles.title}>
          <h3>FIND YOUR BLOCK</h3>
          <h1>Encontre os melhores blocos de carnaval de 2023</h1>
        </div>
        <img
          className={styles.dancer}
          src={dancer}
          alt="background dancer image"
        />

        <div className={styles.bannerButton}>
          <div className={styles.buttons}>
            <input placeholder="Pesquise por nome" />
            <select name="city drop down" id="">
              <option
                className={styles.placeholderOption}
                id="treze"
                value=""
                disabled
                selected
                hidden
              >
                Selecione uma cidade
              </option>
            </select>
            <button className={styles.searchNow}>BUSCAR AGORA</button>
          </div>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.headerResults}>
          <h2>Blocos recomendados</h2>
          <button>Lista/Mapa</button>
        </div>
        <div className={styles.resultsBlocks}>
          <div className={styles.gridResults}>
            <div className={styles.elementGrid}>1</div>
            <div className={styles.elementGrid}>2</div>
            <div className={styles.elementGrid}>3</div>
            <div className={styles.elementGrid}>4</div>
            <div className={styles.elementGrid}>5</div>
            <div className={styles.elementGrid}>6</div>
            <div className={styles.elementGrid}>7</div>
            <div className={styles.elementGrid}>8</div>
            <div className={styles.elementGrid}>9</div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
