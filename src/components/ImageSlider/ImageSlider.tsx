import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import style from "./imageSlider.module.scss";
import { useState } from "react";

const SimpleSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <>
      <Swiper
        className={style.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={style.swiper}>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      <button onClick={goNext}>بلد ام</button>
      <button onClick={goNext}>بلد نسیتم</button>
    </>
  );
};

export default SimpleSlider;
