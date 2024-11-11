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

        <section className='seven'>
          <h2>Additional products</h2>
          <div className="seven_block">
            <div className="seven_sale_block"><span>SALE</span></div>
            <img src="" alt="lampa" />
            <div className="seven_right">
              <h3>LANTERN "KILNEX VOLT" WITH HANDHELD DYNAMO, RADIO AND SIREN-ALARM</h3>
              <p>Compact and lightweight multifunctional flashlight/Radio and Siren Alarm</p>
              <div className="seven_blocks">
                <span>62 $</span>
                <span>82 $</span>
                <div className="seven_save_up">Save up to 20%</div>
              </div>
            </div>
            <button>SHOP NOW</button>
          </div>
        </section>
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
