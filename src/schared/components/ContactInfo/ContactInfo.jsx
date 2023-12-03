import css from "./ContactInfo.module.css";

const ContactInfo = ({ wrapperClass }) => {
  const finalListClass = wrapperClass
    ? `${wrapperClass} ${css.contactInfoList}`
    : css.contactInfoList;
  return (
    <ul className={finalListClass}>
      <li>
        <a
          href="https://maps.app.goo.gl/VetCRL1nfsCvXd8i7"
          target="_blank"
          rel="noreferrer"
          lang="en"
          className={css.contactInfo}
        >
          79005, Ukraine, Lviv street. Shota Rustaveli, 7
        </a>
      </li>
      <li>
        <a
          href="mailto:office@ecosolution.com"
          lang="en"
          target="_blank"
          rel="noreferrer"
          type="email"
          className={css.contactInfo}
        >
          office@ecosolution.com
        </a>
      </li>
    </ul>
  );
};

export default ContactInfo;
