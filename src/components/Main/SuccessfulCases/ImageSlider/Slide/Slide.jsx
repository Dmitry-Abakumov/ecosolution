import RoundButton from "src/schared/components/RoundButton";
import Icon from "src/schared/components/Icon";

import css from "./Slide.module.css";

const Slide = ({
  currentSlideData: { description, imgSrc, location, customer, data },
}) => {
  return (
    <div className={css.slide}>
      <picture>
        <source srcSet={imgSrc.desktop} media="(min-width: 1280px)" />
        <img
          alt={description}
          src={imgSrc.mobile}
          className={css.img}
          loading="lazy"
        />
      </picture>

      <div className={css.contentWrap}>
        <p className={css.info}>{`${location} ${customer}`}</p>
        <RoundButton tabindex="-1" className={css.btn}>
          <Icon iconName="arrow" width="28" height="28" className={css.icon} />
        </RoundButton>
      </div>
      <hr className={css.line} />
      <div className={css.descDataWrap}>
        <p>{description}</p>
        <p>{data}</p>
      </div>
    </div>
  );
};

export default Slide;
