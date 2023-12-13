import SliderProps from "./slider.type";
import style from "./slider.module.scss";
const Slider = ({ src }: SliderProps) => {
  return (
    <div className={style.slider}>
      <img src={src} />
    </div>
  );
};

export default Slider;
