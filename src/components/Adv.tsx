import '../styles/index.scss'
import '../styles/main.scss'
import com2 from '../assets/commutator.svg';
import { ShopButton } from './ShopButton';

export const Adv = () => {
    return (
        <>
            <section className="adv container">
                <div className="adv_left">
                    <h1>HEAD FLASHLIGHT WITH EXTRA POWERFUL RED LIGHT SMILE LX02</h1>
                    <p className='adv_sub'>Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus.</p>
                    <div className="adv_blocks">
                        <p className='adv_offer'>62 $</p>
                        <div className="adv_block">
                            <p className='adv_price'>82 $</p>
                            <div className="adv_save">
                                <span>Save up to 20%</span>
                            </div>
                        </div>
                    </div>
                    <ShopButton />
                </div>
            </section>
            <img className='com_second' src={com2} alt="commutator" />
        </>
    )
}