/* eslint-disable jsx-a11y/anchor-is-valid */
import Icon from "src/schared/components/Icon";

import css from "./OurContacts.module.css";

const OurContacts = () => {
  return (
    <ul className={css.ourContacts}>
      <li className={css.contactBlock}>
        <p className={css.contactBlockName}>Phone:</p>
        <div className={css.telLinkWrap}>
          <a className={css.contactLink} href="tel:+380981234567">
            <Icon iconName="call" width="24" height="24" className={css.icon} />
            38 (098) 12 34 567
          </a>
          <a className={css.contactLink} href="tel:+380931234567">
            <Icon iconName="call" width="24" height="24" className={css.icon} />
            38 (093) 12 34 567
          </a>
        </div>
      </li>

      <li className={css.contactBlock}>
        <p className={css.contactBlockName}>E-mail:</p>
        <a
          href="mailto:office@ecosolution.com"
          lang="en"
          className={css.contactLink}
        >
          <Icon iconName="sms" width="24" height="24" className={css.icon} />
          office@ecosolution.com
        </a>
      </li>

      <li className={css.contactBlock}>
        <p className={css.contactBlockName}>Address:</p>
        <a
          href="https://maps.app.goo.gl/VetCRL1nfsCvXd8i7"
          target="_blank"
          rel="noreferrer"
          lang="en"
          className={css.contactLink}
        >
          <Icon iconName="map" width="24" height="24" className={css.icon} />
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
      </li>

      <li className={`${css.contactBlock} ${css.socialNetworkBlock}`}>
        <p className={css.contactBlockName}>Social Networks:</p>
        <div className={css.socialNetworkWrap}>
          <a href="#" className={css.contactLink}>
            <Icon
              iconName="facebook"
              width="24"
              height="24"
              className={css.icon}
            />
          </a>
          <a href="#" className={css.contactLink}>
            <Icon
              iconName="instagram"
              width="24"
              height="24"
              className={css.icon}
            />
          </a>
        </div>
      </li>
    </ul>
  );
};

export default OurContacts;
