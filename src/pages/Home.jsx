import styles from "./styles.module.css";

import { useEffect, useState } from "react";

import feathers from "../assets/feathers.svg";
import dancer from "../assets/dancer.svg";
import location from "../assets/search.svg";

import React from "react";

function Home() {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const randomImageNumber = Math.floor(Math.random() * 1000) + 1;
    setImageSrc(`https://picsum.photos/400/300?image=${randomImageNumber}`);
  }, []);

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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
            <div className={styles.elementGrid}>
              <img width="100%" src={imageSrc} alt="random image" />
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
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
