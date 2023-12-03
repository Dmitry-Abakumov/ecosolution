import RoundButton from "src/schared/components/RoundButton";
import Icon from "src/schared/components/Icon";

import css from "./Slide.module.css";

const Slide = ({
  currentSlideData: { description, imgSrc, location, customer, data },
}) => {
  return (
    <div className={css.slide}>
      <img alt={description} src={imgSrc.mobile} className={css.img} />
      <div className={css.contentWrap}>
        <p className={css.info}>
          {`${location} ${customer}`}
          {/* <span className={css.location}>{location}</span> {customer} */}
        </p>
        <RoundButton className={css.btn}>
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
