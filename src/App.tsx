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

      <footer>
        <div className="footer_logo">
          <img src="" alt="logo" />
          <img src="" alt="logo_text" />
        </div>
        <ul>
          <li>PRODUCT</li>
          <li>REVIEWS</li>
          <li>VIDEO</li>
          <li>DESCRIPTION</li>
          <li>ADDITIONAL PRODUCTS</li>
        </ul>
        <ul>
          <li>SHIPPING</li>
          <li>PAYMENT</li>
          <li>HOW TO ORDER</li>
          <li>USER AGREEMENT</li>
          <li>ADDITIONAL PRODUCTS</li>
          <li>RETURN</li>
        </ul>
        <div className="footer_block">
          <span>WE ARE IN SOCIAL NETWORKS:</span>
          <ul>
            <img src="" alt="instagram" />
            <img src="" alt="facebook" />
            <img src="" alt="youtube" />
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
