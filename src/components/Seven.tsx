import "../styles/index.scss"
import "../styles/main.scss"
import { ShopButton } from "./ShopButton"
import seven_img from '../assets/seven_img.svg'

export const Seven = () => {
    return (
        <section className='seven container'>
          <h2>Additional products</h2>
          <div className="seven_block">
            <div className="seven_sale_block"><p>SALE</p></div>
            <img src={seven_img} alt="lampa" />
            <div className="seven_right">
              <h3>LANTERN "KILNEX VOLT" WITH HANDHELD DYNAMO, RADIO AND SIREN-ALARM</h3>
              <p>Compact and lightweight multifunctional flashlight/Radio and Siren Alarm</p>
              <div className="seven_blocks">
                <span>62 $</span>
                <span>82 $</span>
                <div className="seven_save_up">Save up to 20%</div>
              </div>
              <ShopButton />
            </div>
            <p>In stock</p>
          </div>
        </section>
    )
}