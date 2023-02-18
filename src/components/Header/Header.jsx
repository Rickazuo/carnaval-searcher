import feathers from "../../assets/feathers.svg";
import dancer from "../../assets/dancer.svg";
import styles from "./styles.module.css";

import Search from "../Search/Search";

export default function Header({ cards, setSearchedCards }) {
  const locations = cards
    .map((location) => location.localization)
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

  return (
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
      <Search locations={locations} cards={cards} setSearchedCards={setSearchedCards} />
    </div>
  );
}
