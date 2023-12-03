import Icon from "src/schared/components/Icon";

import css from "./Logo.module.css";

const Logo = () => {
  return (
    <a href="../../../../public/index.html" className={css.logo}>
      <Icon iconName="logo" width="31" height="18" />
      <span className={css.title}>ecosolution</span>
      <span className={css.slogan}>
        <span className={css.sloganAccent}>GREEN</span>ERGY
        <br /> FOR LIFE
      </span>
    </a>
  );
};

export default Logo;
