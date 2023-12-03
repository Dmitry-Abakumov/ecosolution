import css from "./Backdrop.module.css";

const Backdrop = ({ children }) => {
  return <div className={css.backdrop}>{children}</div>;
};

export default Backdrop;
