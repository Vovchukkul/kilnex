import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

// Import your images here
import photo1 from "../assets/1.svg";
import photo2 from "../assets/2.svg";
import photo3 from "../assets/3.svg";
import photo4 from "../assets/4.svg";
import photo5 from "../assets/5.svg";
import photo6 from "../assets/6.svg";

const SyncedSliders = () => {
  const sliderForRef = useRef<Slider | null>(null);
  const sliderNavRef = useRef<Slider | null>(null);

  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  useEffect(() => {
    setNav1(sliderForRef.current || undefined);
    setNav2(sliderNavRef.current || undefined);
  }, []);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: nav2,
  };

  const settingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: "20px", maxWidth: "1000px" }}>
      {/* Main Slider */}
      <div style={{width: "400px", marginRight: "20px" }}>
        <Slider {...settingsFor} ref={sliderForRef}>
          <div>
            <img src={photo1} alt="Слайд 1" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          </div>
          <div>
            <img src={photo2} alt="Слайд 2" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          </div>
          <div>
            <img src={photo3} alt="Слайд 3" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          </div>
          <div>
            <img src={photo4} alt="Слайд 4" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          </div>
          <div>
            <img src={photo5} alt="Слайд 5" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          </div>
          <div>
            <img src={photo6} alt="Слайд 6" style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
          </div>
        </Slider>
      </div>

      {/* Thumbnail Navigation Slider */}
      <div style={{  transform: "rotate(90deg)", width: "700px", height: "700px" }}>
        <Slider {...settingsNav} ref={sliderNavRef}>
          <div>
            <img src={photo1} alt="Нав 1" style={{ transform: "rotate(-90deg)", width: "80%", cursor: "pointer", borderRadius: "4px" }} />
          </div>
          <div>
            <img src={photo2} alt="Нав 2" style={{ transform: "rotate(-90deg)", width: "80%", cursor: "pointer", borderRadius: "4px" }} />
          </div>
          <div>
            <img src={photo3} alt="Нав 3" style={{ transform: "rotate(-90deg)", width: "80%", cursor: "pointer", borderRadius: "4px" }} />
          </div>
          <div>
            <img src={photo4} alt="Нав 4" style={{ transform: "rotate(-90deg)", width: "80%", cursor: "pointer", borderRadius: "4px" }} />
          </div>
          <div>
            <img src={photo5} alt="Нав 5" style={{ transform: "rotate(-90deg)", width: "80%", cursor: "pointer", borderRadius: "4px" }} />
          </div>
          <div>
            <img src={photo6} alt="Нав 6" style={{ transform: "rotate(-90deg)", width: "80%", cursor: "pointer", borderRadius: "4px" }} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SyncedSliders;



// import React, { useRef, useEffect, useState } from "react";
// import Slider from "react-slick";
// import photo1 from "../assets/logo.svg";
// import photo2 from "../assets/logo.svg";
// import photo3 from "../assets/logo.svg";
// import photo4 from "../assets/logo.svg";

// const SyncedSliders = () => {
//   // Инициализация useRef с начальным значением null
//   const sliderForRef = useRef<Slider | null>(null);
//   const sliderNavRef = useRef<Slider | null>(null);

//   const [nav1, setNav1] = useState<Slider | undefined>(undefined);
//   const [nav2, setNav2] = useState<Slider | undefined>(undefined);

//   useEffect(() => {
//     setNav1(sliderForRef.current || undefined); // Заменяем null на undefined
//     setNav2(sliderNavRef.current || undefined); // Заменяем null на undefined
//   }, []);

//   const settingsFor = {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: true,
//     asNavFor: nav2, // Используем состояние nav2
//   };

//   const settingsNav = {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: nav1, // Используем состояние nav1
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//   };

//   return (
//     <div>
//       {/* Основной слайдер */}
//       <Slider {...settingsFor} ref={sliderForRef}>
//         <div><img src={photo1} alt="Слайд 1" /></div>
//         <div><img src={photo2} alt="Слайд 2" /></div>
//         <div><img src={photo3} alt="Слайд 3" /></div>
//         <div><img src={photo4} alt="Слайд 4" /></div>
//       </Slider>

//       {/* Слайдер навигации */}
//       <Slider {...settingsNav} ref={sliderNavRef}>
//         <div><img src={photo1} alt="Нав 1" /></div>
//         <div><img src={photo2} alt="Нав 2" /></div>
//         <div><img src={photo3} alt="Нав 3" /></div>
//         <div><img src={photo4} alt="Нав 4" /></div>
//       </Slider>
//     </div>
//   );
// };

// export default SyncedSliders;

