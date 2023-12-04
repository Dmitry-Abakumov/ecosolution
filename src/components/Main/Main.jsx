import ContactInfo from "../../schared/components/ContactInfo";

import Container from "src/schared/components/Conatiner";
import Icon from "src/schared/components/Icon";
import ScrollToSectionBtn from "src/schared/components/ScrollToSectionBtn";

import data from "./data.json";

import css from "./Main.module.css";

const Main = () => {
  return (
    <section id="main" className={css.section}>
      <Container className={css.container}>
        <div className={css.generalInfoWrap}>
          <h1 className={css.title}>
            <span className={css.upperCase}>Renewable energy</span> For any task
          </h1>

          <div className={css.btnAndTextWrap}>
            <p className={css.text}>{data.text}</p>
            <ScrollToSectionBtn sectionId="cases" className={css.scrollBtn}>
              Learn more
              <div className={css.circle}>
                <Icon
                  iconName="arrow"
                  width="16"
                  height="16"
                  className={css.icon}
                />
              </div>
            </ScrollToSectionBtn>
          </div>
        </div>

        <hr className={css.line} />

        <div className={css.copyrightContactsWrap}>
          <ContactInfo />
          <p className={css.copyright}>ecosolution © 2023</p>
        </div>

        <picture>
          <source
            srcSet="/images/desktop/wind-generator-desktop.jpg"
            media="(min-width: 1280px)"
          />
          <source
            srcSet="/images/tablet/wind-generator-tablet.jpg"
            media="(min-width: 768px)"
          />
          <img
            className={css.img}
            alt="Wind generator"
            src="/images/mobile/wind-generator-mobile.jpg"
            loading="lazy"
          />
        </picture>
      </Container>
    </section>
  );
};

export default Main;
