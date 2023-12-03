import Container from "src/schared/components/Conatiner";
import MainValues from "./MainValues";

import data from "./data.json";

import css from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={css.section}>
      <Container>
        <h2 className={css.title}>{data.title}</h2>
        <p className={css.text}>{data.text}</p>

        <MainValues />
      </Container>
    </section>
  );
};

export default About;
