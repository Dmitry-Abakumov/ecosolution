import ImageSlider from "./ImageSlider";
import Container from "src/schared/components/Conatiner";

import css from "./SuccessfulCases.module.css";

const SuccessfulCases = () => {
  return (
    <section id="cases" className={css.section}>
      <Container className={css.container}>
        <ImageSlider />
      </Container>
    </section>
  );
};

export default SuccessfulCases;
