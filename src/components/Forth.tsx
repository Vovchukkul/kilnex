import '../styles/index.scss'
import '../styles/main.scss'
import com4 from '../assets/com4.svg'
import com5 from '../assets/com5.svg'
import { ShopButton } from './ShopButton'

export const Forth = () => {
    return (
        <>
            <img className='com-45' src={com4} alt="com4" />
            <section className='forth'>
                <h2>KilNex Smile LX02</h2>
                <div className="forth_wrap">
                    <p>
                        Being accustomed to the darkness, a person can navigate in space under starlight, but this ability is lost if white light is turned on. At the same time, the lighting is of sufficient quality, the beam does not glare and provides a good overview.
                    </p>
                    <ul>
                        <li>Neutral light, close to 4200K sunlight.</li>
                        <li>Tilt control provides up to 180° adjustment.</li>
                        <li>Tempered TIR lens for comfortable diffused light and durability.</li>
                    </ul>
                    <ShopButton />
                </div>
            </section>
            <img className='com-45 com5' src={com5} alt="com5" />
        </>
    )
}