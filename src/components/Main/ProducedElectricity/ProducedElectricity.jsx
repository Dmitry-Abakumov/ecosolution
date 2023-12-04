import { useState, useEffect } from "react";

import Container from "src/schared/components/Conatiner";

import { formatNumberWithDots } from "src/utils";

import css from "./ProducedElectricity.module.css";

const CURRENT_ELECTRICITY = 1134147814;

const ProducedElectricity = () => {
  const [electricity, setElectricity] = useState(CURRENT_ELECTRICITY);

  useEffect(() => {
    const id = setInterval(() => {
      setElectricity((prev) => (prev += 1));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <section id="producedElectricity" className={css.section}>
      <Container className={css.container}>
        <h2 className={css.title}>Electricity we produced for all time</h2>
        <hr className={css.line} />
        <p className={css.producedElectricity}>
          <span className={css.electricityEmount}>
            {formatNumberWithDots(electricity)}
          </span>
          <span className={css.unit}>kWh</span>
        </p>
      </Container>
    </section>
  );
};

export default ProducedElectricity;
