// import "../styles/index.scss";
// import "../styles/main.scss";
// import { Comment } from "./Comment";
// import { useEffect, useRef, useState } from "react";
// import styles from "./Third.module.scss";

// export const Third = () => {
//     const [currentSlide, setCurrentSlide] = useState<number>(0);
//     const [isDragging, setIsDragging] = useState<boolean>(false);
//     const [startPosition, setStartPosition] = useState<number>(0);
//     const [currentTranslate, setCurrentTranslate] = useState<number>(0);
//     const [prevTranslate, setPrevTranslate] = useState<number>(0);
//     const slidesRef = useRef<HTMLDivElement>(null);
//     const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

//     const slides = Array(10).fill(<Comment />); // пример с массивом комментариев

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     useEffect(() => {
//         const handleResize = () => {
//             if (slidesRef.current) {
//                 const width = slidesRef.current.offsetWidth;
//                 setCurrentTranslate(-currentSlide * width);
//                 setPrevTranslate(-currentSlide * width);
//             }
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, [currentSlide]);

//     const handleMouseDown = (event: React.MouseEvent) => {
//         setIsDragging(true);
//         setStartPosition(event.clientX);
//     };

//     const handleMouseMove = (event: React.MouseEvent) => {
//         if (!isDragging) return;

//         const currentPosition = event.clientX;
//         const movedBy = currentPosition - startPosition;

//         setCurrentTranslate(prevTranslate + movedBy);
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);

//         if (slidesRef.current) {
//             const slideWidth = slidesRef.current.offsetWidth;
//             const movedBy = currentTranslate - prevTranslate;

//             if (movedBy < -50 && currentSlide < slides.length - 1) {
//                 setCurrentSlide((prev) => prev + 1);
//             } else if (movedBy > 50 && currentSlide > 0) {
//                 setCurrentSlide((prev) => prev - 1);
//             }

//             setCurrentTranslate(-currentSlide * slideWidth);
//             setPrevTranslate(-currentSlide * slideWidth);
//         }
//     };

//     const getSliderStyle = () => ({
//         transform: `translateX(${currentTranslate}px)`,
//         transition: isDragging ? "none" : "transform 0.3s ease",
//     });

//     return (
//         <section className="third container" id="reviews">
//             <h2>Reviews</h2>
//             <div className="third_bottom">
//                 <div className={styles.slider}>
//                     <div
//                         className={styles.sliderWrapper}
//                         ref={slidesRef}
//                         onMouseDown={handleMouseDown}
//                         onMouseMove={handleMouseMove}
//                         onMouseUp={handleMouseUp}
//                         onMouseLeave={handleMouseUp}
//                         style={getSliderStyle()}
//                     >
//                         {slides.map((slide, index) => (
//                             <div className={styles.sliderSlide} key={index}>
//                                 {slide}
//                                 {windowWidth > 854 && <Comment />}
//                                 {windowWidth > 1600 && <Comment />}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
import "../styles/index.scss";
import "../styles/main.scss";
import { Comment } from "./Comment";
import { useEffect, useRef, useState } from "react";
import styles from "./Third.module.scss";

export const Third = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slidesRef = useRef<HTMLDivElement>(null);

    const slides = Array(10).fill(<Comment />); // Пример с массивом комментариев

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (slidesRef.current) {
            const width = slidesRef.current.offsetWidth;
            slidesRef.current.style.transform = `translateX(-${currentSlide * width}px)`;
        }
    }, [currentSlide]);

    return (
        <section className="third container" id="reviews">
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
                    <a href="/">Leave feedback</a>
                </div>
                <div className="third_right">
                    <div className="third_right_block">
                        <span>5 stars</span>
                        <input
                            type="range"
                            min="0"
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
                </div>
            </div>
            <div className="third_bottom">
                <div className={styles.slider}>
                    <button onClick={prevSlide} className={`${styles.sliderControl} ${styles.prev}`}>
                        ◀
                    </button>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.sliderTrack} ref={slidesRef}>
                            {slides.map((slide, index) => (
                                <div className={styles.sliderSlide} key={index}>
                                    {slide}
                                    {windowWidth > 854 && <Comment />}
                                    {windowWidth > 1600 && <Comment />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={nextSlide} className={`${styles.sliderControl} ${styles.next}`}>
                        ▶
                    </button>
                </div>
                <ul className={styles.dots}>
                    {slides.map((_, index) => (
                        <li
                            key={index}
                            className={index === currentSlide ? styles.active : ""}
                            onClick={() => goToSlide(index)}
                        >
                            <button></button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};


// export const Third = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };

//     const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener("resize", handleResize);

//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);

//     return (
//         <>
//             <section className='third container' id='reviews'>
//                 <h2>Reviews</h2>
//                 <div className="third_top">
//                     <div className="third_left">
//                     <p>4.9</p>
//                     <div className="stars th">
//                         <div className="star t"></div>
//                         <div className="star t"></div>
//                         <div className="star t"></div>
//                         <div className="star t"></div>
//                         <div className="star t"></div>
//                     </div>
//                     <span>Based on 9 reviews</span>
//                     <a href='/'>Leave feedback</a>
//                     </div>
//                     <div className="third_right">
//                     <div className="third_right_block">
//                         <span>5 stars</span>
//                         {/* <div className="range"></div> */}
//                         {/* <input type="range" value="10" min="0" max="100" className="range" id="rangeInput" /> */}
//                          <input
//                             type="range"
//                             min="0"
//                             className='range'
//                             max="100"
//                             value={90}
//                             style={{
//                                 background: `linear-gradient(to right, #EB7D01 ${90}%, #4F4F4F ${90}%)`,
//                                 appearance: "none",
//                                 width: "698px",
//                                 height: "9px",
//                                 borderRadius: "5px",
//                                 outline: "none",
//                                 cursor: "pointer",
//                             }}
//                         />
//                         <span>8</span>
//                     </div>
//                     <div className="third_right_block">
//                         <span>4 stars</span>
//                        <input
//                             type="range"
//                             min="0"
//                             className='range'
//                             max="100"
//                             value={10}
//                             style={{
//                                 background: `linear-gradient(to right, #EB7D01 ${10}%, #4F4F4F ${10}%)`,
//                                 appearance: "none",
//                                 width: "698px",
//                                 height: "9px",
//                                 borderRadius: "5px",
//                                 outline: "none",
//                                 cursor: "pointer",
//                             }}
//                         />
//                         <span>1</span>
//                     </div>
//                     <div className="third_right_block">
//                         <span>3 stars</span>
//                         <input
//                             type="range"
//                             min="0"
//                             className='range'
//                             max="100"
//                             value={0}
//                             style={{
//                                 background: `linear-gradient(to right, #EB7D01 ${0}%, #4F4F4F ${0}%)`,
//                                 appearance: "none",
//                                 width: "698px",
//                                 height: "9px",
//                                 borderRadius: "5px",
//                                 outline: "none",
//                                 cursor: "pointer",
//                             }}
//                         />
//                         <span>0</span>
//                     </div>
//                     <div className="third_right_block">
//                         <span>2 stars</span>
//                         <input
//                             type="range"
//                             min="0"
//                             className='range'
//                             max="100"
//                             value={0}
//                             style={{
//                                 background: `linear-gradient(to right, #EB7D01 ${0}%, #4F4F4F ${0}%)`,
//                                 appearance: "none",
//                                 width: "698px",
//                                 height: "9px",
//                                 borderRadius: "5px",
//                                 outline: "none",
//                                 cursor: "pointer",
//                             }}
//                         />
//                         <span>0</span>
//                     </div>
//                     <div className="third_right_block">
//                         <span>1 stars</span>
//                         <input
//                             type="range"
//                             min="0"
//                             className='range'
//                             max="100"
//                             value={0}
//                             style={{
//                             background: `linear-gradient(to right, #EB7D01 ${0}%, #4F4F4F ${0}%)`,
//                                 appearance: "none",
//                                 width: "698px",
//                                 height: "9px",
//                                 borderRadius: "5px",
//                                 outline: "none",
//                                 cursor: "pointer",
//                             }}
//                         />
//                         <span>0</span>
//                     </div>
//                     </div>
//                 </div>
//                 <div className="third_bottom">
//                 <Slider {...settings}>
//                     <div className="third_bottom_slide">
//                         <Comment />
//                         {windowWidth > 768 && <Comment />}
//                         {windowWidth > 768 && <Comment />}
//                     </div>
//                     <div className="third_bottom_slide">
//                         <Comment />
//                         {windowWidth > 768 && <Comment />}
//                         {windowWidth > 768 && <Comment />}
//                     </div>
//                     <div className="third_bottom_slide">
//                         <Comment />
//                         {windowWidth > 768 && <Comment />}
//                         {windowWidth > 768 && <Comment />}
//                     </div>
//                     <div className="third_bottom_slide">
//                         <Comment />
//                         {windowWidth > 768 && <Comment />}
//                         {windowWidth > 768 && <Comment />}
//                     </div>
//                     <div className="third_bottom_slide">
//                         <Comment />
//                         {windowWidth > 768 && <Comment />}
//                         {windowWidth > 768 && <Comment />}
//                     </div>
//                 </Slider>
//             </div>
//             </section>
//         </>
//     )
// }