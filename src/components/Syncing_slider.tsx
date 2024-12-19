import React, { useRef, useEffect, useState } from "react";
import '../styles/main.scss';
import "./Syncing_slider.scss"
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

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const SyncedSliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      {/* Основний слайдер */}
      <div className="main-slider">
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {photos.map((photo, index) => (
            <div className="slide" key={index}>
              <img src={photo} alt={`Слайд ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Навігаційний слайдер */}
      <div className="nav-slider">
        {photos.map((photo, index) => (
          <>
            <div className="arrow arrow-prev" onClick={handlePrev}>
              <img src={up} alt="" />
            </div>
            <div
              key={index}
              className={`thumbnail ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={photo} alt={`Нав ${index + 1}`} />
            </div>
            <div className="arrow arrow-next" onClick={handleNext}>
              <img src={up} alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SyncedSliders;


// const SyncedSliders = () => {
//   const sliderForRef = useRef<Slider | null>(null);
//   const sliderNavRef = useRef<Slider | null>(null);

//   const [nav1, setNav1] = useState<Slider | undefined>(undefined);
//   const [nav2, setNav2] = useState<Slider | undefined>(undefined);

//   // @ts-ignore
//   const [isClickedPrev, setIsClickedPrev] = useState(false);
//   // @ts-ignore
//   const [isClickedNext, setIsClickedNext] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleClickPrev = () => {
//     setIsClickedNext(false);
//     setIsClickedPrev(true);
//   };

//   const handleClickNext = () => {
//     setIsClickedNext(true);
//     setIsClickedPrev(false);
//   };

//   useEffect(() => {
//     setNav1(sliderForRef.current || undefined);
//     setNav2(sliderNavRef.current || undefined);
//   }, []);

//   const CustomPrevArrow = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => (
//     <div
//       className="arrow arrow-up"
//       {...props}
//       style={{
//         ...props.style,
//         display: "block",
//         cursor: "pointer",
//         top: "-50px",
//         position: "absolute",
//         left: "50%",
//         transform: "translateX(-50%)",
//       }}
//     >
//       <img src={up} alt="arrow up" onClick={handleClickPrev} className={cn("clicked")} />
//     </div>
//   );

//   const CustomNextArrow = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => (
//     <div className="arrow arrow-down" {...props} style={{ ...props.style }}>
//       <img src={up} className={cn("down clicked")} onClick={handleClickNext} alt="arrow down" />
//     </div>
//   );

//   const settingsFor = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: nav2,
//     beforeChange: (_oldIndex: any, newIndex: React.SetStateAction<number>) => setCurrentIndex(newIndex),
//   };

//   const settingsNav = {
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     asNavFor: nav1,
//     dots: false,
//     centerMode: true,
//     centerPadding: "0px",
//     focusOnSelect: true,
//     vertical: true,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1920, // Ширина екрана менше 1024px (планшети)
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           vertical: false, // Горизонтальна орієнтація
//           arrows: false,
//           adaptiveHeight: true
//         },
//       },
//       {
//         breakpoint: 768, // Ширина екрана менше 768px (мобільні)
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           vertical: false,
//           arrows: false, // Вимкнути стрілки
//         },
//       },
//       {
//         breakpoint: 480, // Ширина екрана менше 480px (мобільні)
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           vertical: false,
//           arrows: false,
//         },
//       },
//     ],
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     beforeChange: (current: any, next: any) => console.log(`Current: ${current}, Next: ${next}`),
//   };
  

//   return (
//     <div className="s" style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: "30px" }}>
//       <div style={{ width: "700px", height: "700px" }}>
//         <Slider {...settingsFor} ref={sliderForRef} key="slider-for">
//           {[photo1, photo2, photo3, photo4, photo5, photo6].map((photo, index) => (
//             <div key={index}>
//               <img
//                 src={photo}
//                 alt={`Слайд ${index + 1}`}
//                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <div style={{ width: "100px", height: "700px", display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <Slider {...settingsNav} ref={sliderNavRef} key="slider-nav">
//           {[photo1, photo2, photo3, photo4, photo5, photo6].map((photo, index) => (
//             <div key={index} style={{ display: "flex", justifyContent: "center" }}>
//               <img
//                 src={photo}
//                 alt={`Нав ${index + 1}`}
//                 style={{
//                   width: "80%",
//                   cursor: "pointer",
//                   borderRadius: "4px",
//                   border: currentIndex === index ? "1px solid #EB7D01" : "none", 
//                 }}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default SyncedSliders;
