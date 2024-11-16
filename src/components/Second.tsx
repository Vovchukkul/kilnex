import '../styles/index.scss'
import '../styles/main.scss'
import SyncedSliders from './Syncing_slider'
import shield from '../assets/icons/shield-tick.svg';
import { ShopButton } from './ShopButton';
import second_bottom from '../assets/second_bottom.svg'
import { useState } from 'react';
import classNames from 'classnames';
import com3 from '../assets/com3.svg';

export const Second = () => {
    const [currTab, setCurrTab] = useState(1)

    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      setCurrTab(+event.currentTarget.id)
    }

    return (
        <>
          <section className='second container'>
            <div className="second_top">
              {/* { slider } */}
              <div className="second_slider">
                <SyncedSliders />
              </div>
              <div className="second_info">
                <h2>HEAD FLASHLIGHT WITH EXTRA POWERFUL RED LIGHT SMILE LX02</h2>
                <div className="second_subblock">
                  <span>Available: 21 in stock</span>
                  <div className="stars-block">
                    <div className="stars">
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                      <div className="star"></div>
                    </div>
                    <span>(9 customer reviews)</span>
                  </div>
                </div>
                <div className="second_blocks">
                  <div className="second_wrap">
                    <p className='second_offer'>62 $</p>
                    <p className='second_price'>82 $</p>
                  </div>
                  <div className="second_warranty">
                    <img className="second_icon" src={shield} alt="shield" />
                    <span>24 month warranty</span>
                  </div>
                </div>
                <div className="second_sale">
                  <span>SALE</span>
                </div>
                <p className='second_sub'>
                  The KilNex Smile LX02 is a premium innovative headlamp that combines high quality with affordability. Featuring a powerful red LED of 140 lumens, the model is much more convenient to use during combat missions, hiking, camping, fishing, etc.
                </p>
                <ul className='second_list'>
                  <li>Weight of 124 g</li>
                  <li>Dimensions: 88x35x25 mm.</li>
                  <li>3500 mAh battery.</li>
                  <li>IPX8 waterproof</li>
                </ul>
                <p className="second_desr">Read full description</p>
                {/* <button className='adv_btn'>
                    <span>SHOP NOW</span>
                    <img className='adv_img' src={button} alt="button" />
                </button> */}
                <ShopButton />
              </div>
            </div>
            <div className="second_bottom">
              <div className="second_bottom_lf">
                <ul>
                  <li id="1" onClick={handleClick} className={classNames({second_bottom_active: currTab === 1})}>DESCRIPTION</li>
                  <li id='2' onClick={handleClick} className={classNames({second_bottom_active: currTab === 2})}>ADDITIONAL INFORMATION</li>
                  <li id='3' onClick={handleClick} className={classNames({second_bottom_active: currTab === 3})}>360° VIEW</li>
                </ul>

                <img src={second_bottom} alt="works in the cold" />
              </div>
              <div className="line"></div>
              <div className="second_bottom_rg">
                  {currTab === 1 && (
                    <p>
                      <span>KilNex Smile LX02 multifunctional all-metal rechargeable headlamp with extra powerful diffused red light</span> <br />
                      <br />
                      <span>The KilNex Smile LX02 is a premium innovative headlamp that combines high quality with affordability. Featuring a powerful red LED of 140 lumens, the model is much more convenient to use during combat missions, hiking, camping, fishing, etc.</span> <br />
                      <br />
                      <span>Of particular value is the KilNex Smile LX02 for the military. The use of red light allows you to see better in the dark. This secret of night vision has long been familiar to special forces, military when situations arise where it is important not to lose vigilance for a minute. Especially when changing light - the transition from light to darkness, and vice versa.</span> <br />
                      <br />
                      <span>Red light is practically invisible for animals, does not scare away fish, does not attract insects during night fishing or sitting around the campfire, unlike the white light, which is attractive to mosquitoes and gnats.</span> <br />
                      <br />
                      <span>Being accustomed to the darkness, a person can navigate in space under starlight, but this ability is lost if white light is turned on. At the same time, the lighting is of sufficient quality, the beam does not glare and provides a good overview.</span> <br />
                      <br />
                      <span>Being accustomed to the darkness, a person can navigate in space under starlight, but this ability is lost if white light is turned on. At the same time, the lighting is of sufficient quality, the beam does not glare and provides a good overview.</span> <br />
                      <br />
                    </p>
                  )}

                  {currTab === 2 && (
                    <p>
                      <span>KilNex Smile LX02 multifunctional all-metal rechargeable headlamp with extra powerful diffused red light</span> <br />
                      <br />
                      <span>The KilNex Smile LX02 is a premium innovative headlamp that combines high quality with affordability. Featuring a powerful red LED of 140 lumens, the model is much more convenient to use during combat missions, hiking, camping, fishing, etc.</span> <br />
                      <br />
                      <span>Of particular value is the KilNex Smile LX02 for the military. The use of red light allows you to see better in the dark. This secret of night vision has long been familiar to special forces, military when situations arise where it is important not to lose vigilance for a minute. Especially when changing light - the transition from light to darkness, and vice versa.</span> <br />
                      <br />
                      <span>Red light is practically invisible for animals, does not scare away fish, does not attract insects during night fishing or sitting around the campfire, unlike the white light, which is attractive to mosquitoes and gnats.</span> <br />
                      <br />
                      <span>Being accustomed to the darkness, a person can navigate in space under starlight, but this ability is lost if white light is turned on. At the same time, the lighting is of sufficient quality, the beam does not glare and provides a good overview.</span> <br />
                      <br />
                      <span>Being accustomed to the darkness, a person can navigate in space under starlight, but this ability is lost if white light is turned on. At the same time, the lighting is of sufficient quality, the beam does not glare and provides a good overview.</span> <br />
                      <br />
                    </p>
                  )}

                  {currTab === 3 && (
                    <p>
                      <span>KilNex Smile LX02 multifunctional all-metal rechargeable headlamp with extra powerful diffused red light</span> <br />
                      <br />
                      <span>The KilNex Smile LX02 is a premium innovative headlamp that combines high quality with affordability. Featuring a powerful red LED of 140 lumens, the model is much more convenient to use during combat missions, hiking, camping, fishing, etc.</span> <br />
                      <br />
                      <span>Of particular value is the KilNex Smile LX02 for the military. The use of red light allows you to see better in the dark. This secret of night vision has long been familiar to special forces, military when situations arise where it is important not to lose vigilance for a minute. Especially when changing light - the transition from light to darkness, and vice versa.</span> <br />
                      <br />
                      <span>Red light is practically invisible for animals, does not scare away fish, does not attract insects during night fishing or sitting around the campfire, unlike the white light, which is attractive to mosquitoes and gnats.</span> <br />
                      <br />
                      <span>Being accustomed to the darkness, a person can navigate in space under starlight, but this ability is lost if white light is turned on. At the same time, the lighting is of sufficient quality, the beam does not glare and provides a good overview.</span> <br />
                      <br />
                      <span>Being accustomed to the darkness, a person can navigate in space under starlight, but this ability is lost if white light is turned on. At the same time, the lighting is of sufficient quality, the beam does not glare and provides a good overview.</span> <br />
                      <br />
                    </p>
                  )}  
              </div>
            </div>
          </section>
          <img src={com3} alt="comutator3" className='com3'/>
        </>
    )
}