import Container from "src/schared/components/Conatiner";

import css from "./ProducedElectricity.module.css";

const ProducedElectricity = () => {
  return (
    <section id="producedElectricity" className={css.section}>
      <Container className={css.container}>
        <h2 className={css.title}>Electricity we produced for all time</h2>
        <hr className={css.line} />
        <p className={css.producedElectricity}>
          <span className={css.electricityEmount}>1.134.147.814</span>
          <span className={css.unit}>kWh</span>
        </p>
      </Container>
    </section>
  );
};

export default ProducedElectricity;
