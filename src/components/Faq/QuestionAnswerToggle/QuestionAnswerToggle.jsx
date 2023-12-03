import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

import css from "./QuestionAnswerToggle.module.css";

const QuestionAnswerToggle = ({
  data: { question, answer },
  elIndex,
  openedAnswerIndex,
  setOpenedAnwerIndex,
}) => {
  const isAnswerShow = elIndex === openedAnswerIndex;

  const onClick = () => {
    isAnswerShow ? setOpenedAnwerIndex(null) : setOpenedAnwerIndex(elIndex);
  };

  return (
    <li className={css.item}>
      <hr className={css.line} />
      <div className={css.btnQuestionWrap}>
        <button type="button" onClick={onClick} className={css.btn}>
          {isAnswerShow ? (
            <LuMinus className={css.minusIcon} />
          ) : (
            <LuPlus className={css.plusIcon} />
          )}
        </button>
        <p className={css.question}>{question}</p>
      </div>
      {isAnswerShow && <p className={css.answer}>{answer}</p>}
    </li>
  );
};

export default QuestionAnswerToggle;
