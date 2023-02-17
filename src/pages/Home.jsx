import Header from "../components/Header/Header";
import RecomendedBlocks from "../components/RecomendedBlocks/RecomendedBlocks";
import Footer from "../components/Footer/Footer";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
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
  },
  {
    image: block2,
    title: "Todo mundo null",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Florianópolis - SC",
  },
  {
    image: block3,
    title: "Hoje dou exception",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Curitiba - PR",
  },
  {
    image: block4,
    title: "Manda Node",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Salvador - BA",
  },
  {
    image: block5,
    title: "Só no back-end",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "São Paulo - SP",
  },
  {
    image: block6,
    title: "Esse anel não é de Ruby",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "São Paulo - SP",
  },
  {
    image: block7,
    title: "Pimenta no C# dos outros é refresco",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Rio de Janeiro - RJ",
  },
  {
    image: block8,
    title: "EnCACHE aqui",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "Porto Alegre - RS",
  },
  {
    image: block9,
    title: "Não valho nada mas JAVA li",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum dolor rerum aut placeat eligendi incidunt alias quam suscipit repudiandae ipsam error nulla, eveniet tenetur id veniam aliquam impedit excepturi!",
    localization: "São Paulo - SP",
  },
];

function Home() {
  const { width, height } = useWindowSize();

  return (
    <div className={styles.carnavalContainer}>
      <Header cards={cards} />
      <Confetti
        tweenDuration={1000}
        numberOfPieces={400}
        width={width}
        height={height}
        recycle={false}
      />
      <RecomendedBlocks cards={cards} />
      <Footer />
    </div>
  );
}

export default Home;
