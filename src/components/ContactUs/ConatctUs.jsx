import OurContacts from "./OurContacts";
import ContactForm from "./ContactForm";

import Container from "src/schared/components/Conatiner";

import css from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <section id="contactUs" className={css.section}>
      <Container>
        <h2 className={css.title}>Contact us</h2>
        <OurContacts />
        <ContactForm />

        <hr className={css.line} />
      </Container>
    </section>
  );
};

export default ContactUs;
