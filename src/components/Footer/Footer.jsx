/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "src/schared/components/Conatiner";
import Logo from "src/schared/components/Logo";
import ScrollToSectionBtn from "src/schared/components/ScrollToSectionBtn";
import Icon from "src/schared/components/Icon";
import ContactInfo from "src/schared/components/ContactInfo";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container className={css.container}>
        <div className={css.logoBtnSocialWrap}>
          <div className={css.wrap}>
            <Logo />
            <ScrollToSectionBtn sectionId="main" className={css.btn}>
              <Icon
                iconName="arrow"
                width="16"
                height="16"
                className={css.arrowIcon}
              />
            </ScrollToSectionBtn>
          </div>

          <ul className={css.socialsList}>
            <li>
              <a href="#" className={css.socialLink}>
                <Icon
                  iconName="instagram"
                  width="24"
                  height="24"
                  className={css.socialIcon}
                />
              </a>
            </li>
            <li>
              <a href="#" className={css.socialLink}>
                <Icon
                  iconName="facebook"
                  width="24"
                  height="24"
                  className={css.socialIcon}
                />
              </a>
            </li>
          </ul>
        </div>

        <div className={css.contactsCopyrightWrap}>
          <ContactInfo wrapperClass={css.contctInfoWrapper} />
          <p className={css.copyright}>ecosolution © 2023</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
