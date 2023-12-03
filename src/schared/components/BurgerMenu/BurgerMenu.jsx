/* eslint-disable jsx-a11y/anchor-is-valid */
import { IoIosClose } from "react-icons/io";

import ScrollToSectionBtn from "src/schared/components/ScrollToSectionBtn";
import Icon from "../Icon";

import css from "./BurgerMenu.module.css";

import sectionsData from "./sections-data.json";

const BurgerMenu = ({ setIsMenuOpen }) => {
  return (
    <div className={css.burgerMenu}>
      <button className={css.closeBtn} onClick={() => setIsMenuOpen(false)}>
        <IoIosClose className={css.closeIcon} />
        close
      </button>

      <hr className={css.line} />

      <ul className={css.btnsList}>
        {sectionsData.map(({ name, id }) => (
          <li key={id}>
            <ScrollToSectionBtn
              key={id}
              sectionId={id}
              onClick={() => setIsMenuOpen(false)}
              className={css.scrollBtn}
            >
              {name}
              <Icon
                iconName="arrow"
                width="16"
                height="16"
                className={css.arrowIcon}
              />
            </ScrollToSectionBtn>
          </li>
        ))}
      </ul>

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
  );
};

export default BurgerMenu;
