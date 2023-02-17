import { useState, useEffect } from "react";

import styles from "./styles.module.css";
import Card from "../Card/Card";
import Toggle from "../Toggle/Toggle";

export default function RecomendedBlocks({ cards }) {
  return (
    <div className={styles.results}>
      <div className={styles.headerResults}>
        <h2>Blocos recomendados</h2>
        <Toggle />
      </div>
      <div>
        <h4 className={styles.resultsObservation}>*Blocos ilustrativos</h4>
      </div>
      <div className={styles.resultsBlocks}>
        <div className={styles.gridResults}>
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              body={card.body}
              localization={card.localization}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
