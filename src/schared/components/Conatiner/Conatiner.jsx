import css from "./Container.module.css";

const Container = ({ children, className, ...otherProps }) => {
  return (
    <div className={`${css.container} ${className}`} {...otherProps}>
      {children}
    </div>
  );
};

export default Container;
