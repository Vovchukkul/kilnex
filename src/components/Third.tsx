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
            <section className='third container' id='reviews'>
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
                        {/* <div className="range"></div> */}
                        {/* <input type="range" value="10" min="0" max="100" className="range" id="rangeInput" /> */}
                         <input
                            type="range"
                            min="0"
                            className='range'
                            max="100"
                            value={90}
                            style={{
                                background: `linear-gradient(to right, #EB7D01 ${90}%, #4F4F4F ${90}%)`,
                                appearance: "none",
                                width: "698px",
                                height: "9px",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                            }}
                        />
                        <span>8</span>
                    </div>
                    <div className="third_right_block">
                        <span>4 stars</span>
                       <input
                            type="range"
                            min="0"
                            className='range'
                            max="100"
                            value={10}
                            style={{
                                background: `linear-gradient(to right, #EB7D01 ${10}%, #4F4F4F ${10}%)`,
                                appearance: "none",
                                width: "698px",
                                height: "9px",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                            }}
                        />
                        <span>1</span>
                    </div>
                    <div className="third_right_block">
                        <span>3 stars</span>
                        <input
                            type="range"
                            min="0"
                            className='range'
                            max="100"
                            value={0}
                            style={{
                                background: `linear-gradient(to right, #EB7D01 ${0}%, #4F4F4F ${0}%)`,
                                appearance: "none",
                                width: "698px",
                                height: "9px",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                            }}
                        />
                        <span>0</span>
                    </div>
                    <div className="third_right_block">
                        <span>2 stars</span>
                        <input
                            type="range"
                            min="0"
                            className='range'
                            max="100"
                            value={0}
                            style={{
                                background: `linear-gradient(to right, #EB7D01 ${0}%, #4F4F4F ${0}%)`,
                                appearance: "none",
                                width: "698px",
                                height: "9px",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                            }}
                        />
                        <span>0</span>
                    </div>
                    <div className="third_right_block">
                        <span>1 stars</span>
                        <input
                            type="range"
                            min="0"
                            className='range'
                            max="100"
                            value={0}
                            style={{
                            background: `linear-gradient(to right, #EB7D01 ${0}%, #4F4F4F ${0}%)`,
                                appearance: "none",
                                width: "698px",
                                height: "9px",
                                borderRadius: "5px",
                                outline: "none",
                                cursor: "pointer",
                            }}
                        />
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
        </>
    )
}