import { useState } from "react";
import styles from "./styles.module.css";

export default function Toggle({toggle, onClick}) {
    return (
        <div onClick={onClick} className={styles.containerToggle}>
            <button
                className={
                    toggle ? styles.filledButton : styles.notFilledButton
                }
            >
                Lista
            </button>
            <button
                className={
                    !toggle ? styles.filledButton : styles.notFilledButton
                }
            >
                Mapa
            </button>
        </div>
    );
}
