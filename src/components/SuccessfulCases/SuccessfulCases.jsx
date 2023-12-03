import ImageSlider from "./ImageSlider/ImageSlider";
import Container from "src/schared/components/Conatiner";

import css from "./SuccessfulCases.module.css";

const SuccessfulCases = () => {
  return (
    <section id="cases" className={css.section}>
      <Container className={css.container}>
        <h2 className={css.title}>Successful cases of our company</h2>
        <ImageSlider />
      </Container>
    </section>
  );
};

export default SuccessfulCases;
