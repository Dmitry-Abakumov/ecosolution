import { useState } from "react";

import QuestionAnswerToggle from "./QuestionAnswerToggle";

import Container from "src/schared/components/Conatiner";
import ScrollToSectionBtn from "src/schared/components/ScrollToSectionBtn";
import Icon from "src/schared/components/Icon";

import questionsData from "./questions-data.json";

import css from "./Faq.module.css";

const Faq = () => {
  const [openedAnswerIndex, setOpenedAnwerIndex] = useState(0);

  return (
    <section id="faq" className={css.section}>
      <Container>
        <h2 className={css.title}>Frequently Asked Questions</h2>
        <ul className={css.questAnswlist}>
          {questionsData.map((el, indx) => (
            <QuestionAnswerToggle
              key={el.id}
              data={el}
              elIndex={indx}
              openedAnswerIndex={openedAnswerIndex}
              setOpenedAnwerIndex={setOpenedAnwerIndex}
            />
          ))}
        </ul>

        <p className={css.message}>Didn't find the answer to your question? </p>
        <ScrollToSectionBtn sectionId="contactUs" className={css.scrollBtn}>
          Get in touch
          <div className={css.circle}>
            <Icon iconName="arrow" width="8" height="9" className={css.icon} />
          </div>
        </ScrollToSectionBtn>
      </Container>
    </section>
  );
};

export default Faq;
