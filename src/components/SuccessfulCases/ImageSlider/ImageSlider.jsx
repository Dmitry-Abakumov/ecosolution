import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

import Slide from "./Slide/Slide";

import RoundButton from "src/schared/components/RoundButton";
import Icon from "src/schared/components/Icon";

import slidesData from "./slides-data.json";

import css from "./ImageSlider.module.css";

const SLIDES_AMOUNT = slidesData?.length;
const LAST_SLIDE = 5;

const ImageSlider = () => {
  const initialScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const [slideNumber, setSlideNumber] = useState(1);
  const [currentScreenWidth, setScreenWidth] = useState(initialScreenWidth);
  const sliderRef = useRef();

  const resizeHandler = () => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setScreenWidth(screenWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    slidesToShow: currentScreenWidth < 748 ? 1 : 2,
    beforeChange: (_, next) => setSlideNumber(next + 1),
    arrows: false,
  };

  const slideNumberFormSecond =
    slideNumber === LAST_SLIDE ? 1 : slideNumber + 1;

  return (
    <>
      <div className={css.imageSlider}>
        <h2 className={css.title}>Successful cases of our company</h2>
        <hr className={css.line} />
        <div className={css.slideNumberAndBtnsWrap}>
          <span className={css.slideNumber}>
            {`0${
              currentScreenWidth < 768 ? slideNumber : slideNumberFormSecond
            } `}
            <span className={css.slidesAmount}>{`/0${SLIDES_AMOUNT}`}</span>
          </span>
          <div className={css.btnWrap}>
            <RoundButton className={css.btn} onClick={previous}>
              <Icon
                iconName="arrow"
                width="36"
                height="36"
                className={`${css.icon} ${css.decrementIcon}`}
              />
            </RoundButton>
            <RoundButton className={css.btn} onClick={next}>
              <Icon
                iconName="arrow"
                width="36"
                height="36"
                className={css.icon}
              />
            </RoundButton>
          </div>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef} className={css.slider}>
        {slidesData.map((data) => (
          <Slide key={data.description} currentSlideData={data} />
        ))}
      </Slider>
    </>
  );
};

export default ImageSlider;
