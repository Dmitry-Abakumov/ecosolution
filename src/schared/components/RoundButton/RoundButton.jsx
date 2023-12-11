import css from "./RoundButton.module.css";

const RoundButton = ({ children, className, onClick, ...otherProps }) => {
  const finalStyles = className ? `${css.btn} ${className}` : `${css.btn}`;
  return (
    <button onClick={onClick} className={finalStyles} {...otherProps}>
      {children}
    </button>
  );
};

export default RoundButton;
