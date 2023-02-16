import { useState, useEffect } from "react";

import styles from "./styles.module.css";
import Card from "../Card/Card";
import Toggle from "../Toggle/Toggle";

export default function RecomendedBlocks() {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
        setImageSrc(`https://picsum.photos/400/300?image=${randomImageNumber}`);
    }, []);

    return (
        <div className={styles.results}>
            <div className={styles.headerResults}>
                <h2>Blocos recomendados</h2>
                <Toggle />
            </div>
            <div className={styles.resultsBlocks}>
                <div className={styles.gridResults}>
                    {[...new Array(6)].map((_, index) => (
                        <Card key={index} image={imageSrc} />
                    ))}
                </div>
            </div>
        </div>
    );
}
