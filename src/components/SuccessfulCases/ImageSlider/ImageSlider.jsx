import { useRef, useState } from "react";
import Slider from "react-slick";

import Slide from "./Slide/Slide";

import RoundButton from "src/schared/components/RoundButton";
import Icon from "src/schared/components/Icon";

import slidesData from "./slides-data.json";

import css from "./ImageSlider.module.css";

const SLIDES_AMOUNT = slidesData?.length;

const ImageSlider = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const sliderRef = useRef();

  const slidesToShow = 1;

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    slidesToShow: slidesToShow,
    beforeChange: (_, next) => setSlideNumber(next + 1),
    arrows: false,
  };

  // const secondSlideNumber =
  //   currentSlideNumber + 1 > SLIDES_AMOUNT ? 2 : currentSlideNumber + 1;

  return (
    <>
      <div className={css.slideNumberAndBtnsWrap}>
        <span className={css.slideNumber}>
          {`0${slideNumber} `}
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

      <Slider {...settings} ref={sliderRef} className={css.slider}>
        {slidesData.map((data) => (
          <Slide key={data.description} currentSlideData={data} />
        ))}
      </Slider>
    </>
  );
};

export default ImageSlider;
