import { useState } from "react";

import Header from "../components/Header/Header";
import RecomendedBlocks from "../components/RecomendedBlocks/RecomendedBlocks";
import Footer from "../components/Footer/Footer";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Toggle from "../components/Toggle/Toggle";
import Map from "../components/Map/Map";

import styles from "./styles.module.css";
import block1 from "../assets/block1.png";
import block2 from "../assets/block2.png";
import block3 from "../assets/block3.png";
import block4 from "../assets/block4.png";
import block5 from "../assets/block5.png";
import block6 from "../assets/block6.png";
import block7 from "../assets/block7.png";
import block8 from "../assets/block8.png";
import block9 from "../assets/block9.png";

const cards = [
  {
    image: block1,
    title: "O Python do vovô não sobe mais",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "São Paulo - SP",
    coordinates: [-23.5589, -46.6488]
  },
  {
    image: block2,
    title: "Todo mundo null",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Florianópolis - SC",
    coordinates: [-27.5948, -48.5569]
  },
  {
    image: block3,
    title: "Hoje dou exception",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Curitiba - PR",
    coordinates: [-25.4372, -49.2700]
  },
  {
    image: block4,
    title: "Manda Node",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Salvador - BA",
    coordinates: [-12.9777, -38.5016]
  },
  {
    image: block5,
    title: "Só no back-end",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "São Paulo - SP",
    coordinates: [-23.5789, -46.6388]
  },
  {
    image: block6,
    title: "Esse anel não é de Ruby",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "São Paulo - SP",
    coordinates: [-23.5489, -46.6488]
  },
  { 
    image: block7,
    title: "Pimenta no C# dos outros é refresco",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Rio de Janeiro - RJ",
    coordinates: [-22.9035, -43.2096 ]
  },
  {
    image: block8,
    title: "EnCACHE aqui",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Porto Alegre - RS",
    coordinates: [-30.0277, -51.2287]
  },
  {
    image: block9,
    title: "Não valho nada mas JAVA li",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "São Paulo - SP",
    coordinates: [-23.5489, -46.6388]
  },
];

function Home() {
  const { width, height } = useWindowSize();
  const [searchedCards, setSearchedCards] = useState([...cards]);
  const [toggle, setToggle] = useState(true);

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className={styles.carnavalContainer}>
      <Header cards={cards} setSearchedCards={setSearchedCards} />
      <Confetti
        tweenDuration={1000}
        numberOfPieces={400}
        width={width}
        height={height}
        recycle={false}
      />
      <div className={styles.results}>
        <div className={styles.headerResults}>
          <h2>Blocos recomendados</h2>
          <Toggle toggle={toggle} onClick={onClick} />
        </div>
        {toggle ? <RecomendedBlocks cards={searchedCards} /> : <Map cards={cards}/>}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
