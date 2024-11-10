import { Adv } from "./components/Adv"
import { Header } from "./components/Header"
import { Second } from "./components/Second";
import './utils/normalize.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Third } from "./components/Third";
import { Forth } from "./components/Forth";

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

        <section className='fives'>
          {/* { video } */}
          <img src="" alt="preview" />
          <button>
            <img src="" alt="youtube" />
          </button>
        </section>

        <section className='six'>
          <article className="six_f">
            <div className="six_f_wrap">
              <h3>SCOPE OF APPLICATION KilNex Smile LX02</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus. Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus.
              </p>
              <ul>
                <li>Specifically designed for military, outdoor activities, fishing, hunting, mountaineering, camping.</li>
                <li>CREE XP-G3N LEDs provide maximum powerful diffused illumination of up to 1100 lumens.</li>
                <li>The red light LED provides maximum diffuse illumination of up to 140 lumens.</li>
                <li>The red light is invisible to animals, fish and mosquitoes. Does not blind your neighbor's eyes, convenient for night vision.Effective in fog.</li>
              </ul>
            </div>
            <img src="" alt="photo" />
          </article>
          <article className="six_s">
            <div className="six_s_wrap">
              <h3>SCOPE OF DELIVERY KilNex Smile LX02</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus. Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus.
              </p>
              <ul>
                <li>Neutral light, close to 4200K sunlight.</li>
                <li>Tilt control provides up to 180° adjustment.</li>
                <li>Tempered TIR lens for comfortable diffused light and durability.</li>
                <li>High precision digital optics technology for maximum reflector performance.</li>
              </ul>
            </div>
            <img src="" alt="photo" />
          </article>
          <article className="six_t">
            <div className="six_t_wrap">
              <h3>SCOPE OF APPLICATION KilNex Smile LX02</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus. Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus.
              </p>
              <ul>
                <li>Maximum white light beam distance of up to 110m.</li>
                <li>Maximum red light beam distance up to 42 m.</li>
                <li>Intelligent battery charging circuit (via microUSB charging port), cable included.</li>
                <li>Advanced temperature control technology.</li>
              </ul>
            </div>
            <img src="" alt="photo" />
          </article>
          <article className="six_f">
            <div className="six_f_wrap">
              <h3>SCOPE OF DELIVERY KilNex Smile LX02</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus. Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus.
              </p>
              <ul>
                <li>Strong magnetic mount (for mounting on any metal surface).</li>
                <li>Shock resistance up to 2 meters.</li>
                <li>Matte anodized finish for comfortable grip with wet hands.</li>
                <li>Protection against accidental button presses.</li>
              </ul>
            </div>
            <img src="" alt="photo" />
          </article>
          <button>SHOP NOW</button>
        </section>

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
