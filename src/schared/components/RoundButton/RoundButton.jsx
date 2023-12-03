import css from "./RoundButton.module.css";

const RoundButton = ({ children, className, onClick }) => {
  const finalStyles = className ? `${css.btn} ${className}` : `${css.btn}`;
  return (
    <button onClick={onClick} className={finalStyles}>
      {children}
    </button>
  );
};

export default RoundButton;
