import React, { useRef, useEffect, useState } from "react";
import '../styles/main.scss';
import Slider from "react-slick";
import photo1 from "../assets/1.svg";
import photo2 from "../assets/2.svg";
import photo3 from "../assets/3.svg";
import photo4 from "../assets/4.svg";
import photo5 from "../assets/5.svg";
import photo6 from "../assets/6.svg";
import up from '../assets/icons/chevron-up.svg';
import { JSX } from "react/jsx-runtime";
import cn from "classnames";
import "../components/Syncing_slider.scss"

const SyncedSliders = () => {
  const sliderForRef = useRef<Slider | null>(null);
  const sliderNavRef = useRef<Slider | null>(null);

  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  // @ts-ignore
  const [isClickedPrev, setIsClickedPrev] = useState(false);
  // @ts-ignore
  const [isClickedNext, setIsClickedNext] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    setIsClickedNext(false);
    setIsClickedPrev(true);
  };

  const handleClickNext = () => {
    setIsClickedNext(true);
    setIsClickedPrev(false);
  };

  useEffect(() => {
    setNav1(sliderForRef.current || undefined);
    setNav2(sliderNavRef.current || undefined);
  }, []);

  const CustomPrevArrow = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => (
    <div
      className="arrow arrow-up"
      {...props}
      style={{
        ...props.style,
        display: "block",
        cursor: "pointer",
        top: "-50px",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <img src={up} alt="arrow up" onClick={handleClickPrev} className={cn("clicked")} />
    </div>
  );

  const CustomNextArrow = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => (
    <div className="arrow arrow-down" {...props} style={{ ...props.style }}>
      <img src={up} className={cn("down clicked")} onClick={handleClickNext} alt="arrow down" />
    </div>
  );

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
    beforeChange: (_oldIndex: any, newIndex: React.SetStateAction<number>) => setCurrentIndex(newIndex),
  };

  const settingsNav = {
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    vertical: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="s">
      {/* Main Slider */}
      <div className="main-slider">
        <Slider {...settingsFor} ref={sliderForRef}>
          {[photo1, photo2, photo3, photo4, photo5, photo6].map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                alt={`Слайд ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
  
      {/* Navigation Slider */}
      <div className="nav-slider">
        <Slider {...settingsNav} ref={sliderNavRef}>
          {[photo1, photo2, photo3, photo4, photo5, photo6].map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                alt={`Нав ${index + 1}`}
                className={currentIndex === index ? "active" : ""}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );  
};

export default SyncedSliders;