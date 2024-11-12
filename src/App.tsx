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

function App() {
  return (
    <>
      <Header />
      
      {/* <aside></aside> */}

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
