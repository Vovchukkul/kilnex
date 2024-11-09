import button from '../assets/button2.svg';
import '../styles/index.scss';
import '../styles/main.scss';

export const ShopButton = () => {
    return (
        <button className='adv_btn'>
            <span>SHOP NOW</span>
            <img className='adv_img' src={button} alt="button" />
        </button>
    )
}