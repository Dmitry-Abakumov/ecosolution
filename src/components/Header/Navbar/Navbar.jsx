import { useState } from "react";

import Icon from "src/schared/components/Icon";
import RoundButton from "src/schared/components/RoundButton";
import Container from "src/schared/components/Conatiner";
import ScrollToSectionBtn from "src/schared/components/ScrollToSectionBtn";
import Backdrop from "src/schared/components/Backdrop";
import BurgerMenu from "src/schared/components/BurgerMenu";

import Logo from "../../../schared/components/Logo";

import css from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={css.navbar}>
        <Logo />

        <div className={css.btnsWrap}>
          <RoundButton
            className={css.burgerMenu}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Icon
              iconName="menu"
              width="16"
              height="16"
              className={css.burgerIcon}
            />
          </RoundButton>

          <ScrollToSectionBtn sectionId="contactUs" className={css.scrollBtn}>
            Get in touch
            <div className={css.circle}>
              <Icon
                iconName="arrow"
                width="8"
                height="9"
                className={css.icon}
              />
            </div>
          </ScrollToSectionBtn>
        </div>
      </nav>

      {isMenuOpen && (
        <Backdrop>
          <Container className={css.burgerMenuContainer}>
            <BurgerMenu setIsMenuOpen={setIsMenuOpen} />
          </Container>
        </Backdrop>
      )}
    </>
  );
};

export default Navbar;
