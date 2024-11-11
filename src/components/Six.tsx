import '../styles/index.scss';
import '../styles/main.scss';
import { ShopButton } from './ShopButton';
import { SixBlock } from './SixBlock';
import six_f from "../assets/six_f.svg"
import six_s from "../assets/six_s.svg"
import six_t from "../assets/six_t.svg"
import six_fr from "../assets/six_fr.svg"
import com3 from "../assets/com3.svg"

export const Six = () => {
    return (
        <>
            <section className='six container'>
                <SixBlock 
                    h3="SCOPE OF APPLICATION KilNex Smile LX02"
                    p="Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus. Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus."
                    array_of_li={["Specifically designed for military, outdoor activities, fishing, hunting, mountaineering, camping.", "CREE XP-G3N LEDs provide maximum powerful diffused illumination of up to 1100 lumens.", "The red light LED provides maximum diffuse illumination of up to 140 lumens.", "The red light is invisible to animals, fish and mosquitoes. Does not blind your neighbor's eyes, convenient for night vision.Effective in fog."]}
                    img={six_f}
                />
                <SixBlock 
                    h3="SCOPE OF DELIVERY KilNex Smile LX02"
                    p="Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus. Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus."
                    array_of_li={["Neutral light, close to 4200K sunlight.", "Tilt control provides up to 180° adjustment.", "Tempered TIR lens for comfortable diffused light and durability.", "High precision digital optics technology for maximum reflector performance."]}
                    img={six_s}
                />
                <SixBlock 
                    h3="SCOPE OF APPLICATION KilNex Smile LX02"
                    p="Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus. Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus."
                    array_of_li={["Maximum white light beam distance of up to 110m.", "Maximum red light beam distance up to 42 m.", "Intelligent battery charging circuit (via microUSB charging port), cable included.", "Advanced temperature control technology."]}
                    img={six_t}
                />
                <SixBlock 
                    h3="SCOPE OF DELIVERY KilNex Smile LX02"
                    p="Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus. Lorem ipsum dolor sit amet consectetur. Egestas nulla turpis in erat consequat tellus fringilla fermentum. Nulla pellentesque tempus ornare nibh faucibus at tellus."
                    array_of_li={["Strong magnetic mount (for mounting on any metal surface).", "Shock resistance up to 2 meters.", "Matte anodized finish for comfortable grip with wet hands.", "Protection against accidental button presses."]}
                    img={six_fr}
                />
                <ShopButton />
            </section>
            <img src={com3} alt="com3" />
        </>
    )
}