import '../styles/index.scss'
import '../styles/main.scss'
import Slider from "react-slick";
import { Comment } from './Comment';

export const Third = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className='third container'>
                <h2>Reviews</h2>
                <div className="third_top">
                    <div className="third_left">
                    <p>4.9</p>
                    <div className="stars th">
                        <div className="star t"></div>
                        <div className="star t"></div>
                        <div className="star t"></div>
                        <div className="star t"></div>
                        <div className="star t"></div>
                    </div>
                    <span>Based on 9 reviews</span>
                    <a href='/'>Leave feedback</a>
                    </div>
                    <div className="third_right">
                        <div className="third_right_block">
                            <span>5 stars</span>
                            <div className="range"><div></div></div>
                            <span>8</span>
                        </div>
                        <div className="third_right_block">
                            <span>4 stars</span>
                            <div className="range"><div></div></div>
                            <span>1</span>
                        </div>
                        <div className="third_right_block">
                            <span>3 stars</span>
                            <div className="range"><div></div></div>
                            <span>0</span>
                        </div>
                        <div className="third_right_block">
                            <span>2 stars</span>
                            <div className="range"><div></div></div>
                            <span>0</span>
                        </div>
                        <div className="third_right_block">
                            <span>1 stars</span>
                            <div className="range"><div></div></div>
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div className="third_bottom">
                    {/* { slider } */}
                    <Slider {...settings}>
                        <div className='third_bottom_slide'>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                        <div className='third_bottom_slide'>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                        <div className='third_bottom_slide'>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                        <div className='third_bottom_slide'>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                        <div className='third_bottom_slide'>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </Slider>
                </div>
            </section>
            <img src="" alt="" />
        </>
    )
}