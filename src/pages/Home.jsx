import Header from "../components/Header/Header";
import RecomendedBlocks from "../components/RecomendedBlocks/RecomendedBlocks";
import Confetti from "react-confetti";
import { useState, useRef, useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";

function Home() {
    const { width, height } = useWindowSize();

    return (
        <body>
            <Header />
            <Confetti
                tweenDuration={1000}
                numberOfPieces={400}
                width={width}
                height={height}
                recycle={false}
            />
            <RecomendedBlocks />
        </body>
    );
}

export default Home;
