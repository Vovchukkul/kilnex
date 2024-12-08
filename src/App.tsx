import { Adv } from "./components/Adv"
import { Header } from "./components/Header"
import { Second } from "./components/Second";
import './utils/normalize.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Third } from "./components/Third";
import { Forth } from "./components/Forth";
import { Fiveth } from "./components/Fiveth";
import { Six } from "./components/Six";
import { Seven } from "./components/Seven";
import { Footer } from "./components/Footer";
import "./utils/mixins.scss";
import { useState } from "react";
import { Aside } from "./components/Aside";

function App() {
  const [isShowNav, setIsShowNav] = useState(false)

  const handleClick = () => {
    setIsShowNav(!isShowNav)
    if (!isShowNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }

  return (
    <>
      <Header click={handleClick} isShowNav={isShowNav} />

      {isShowNav && (
        <Aside click={handleClick} />
      )}
      
      <main>
        <Adv />

        <Second />

        <Third />

        <Forth />

        <Fiveth />

        <Six />

        <Seven />
      </main>

      <Footer />
    </>
  )
}

export default App
