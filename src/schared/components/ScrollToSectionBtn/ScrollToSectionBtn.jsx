import css from "./ScrollToSectionBtn.module.css";

const ScrollToSectionBtn = ({ sectionId, className, onClick, children }) => {
  const scrollToSection = () => {
    const section = document.getElementById(sectionId);

    const offsetToSectionFromTop = section.getBoundingClientRect().top;
    const headerHeight = 115;

    const finalScrollHeight = offsetToSectionFromTop - headerHeight;

    window.scrollBy({
      top: finalScrollHeight,
      behavior: "smooth",
    });
  };

  const finalClassName = className
    ? `${css.scrollBtn} ${className}`
    : `${css.scrollBtn}`;

  const finalOnClickFunction = onClick
    ? () => {
        onClick();
        scrollToSection();
      }
    : scrollToSection;

  return (
    <button
      type="button"
      onClick={finalOnClickFunction}
      className={finalClassName}
    >
      {children}
    </button>
  );
};

export default ScrollToSectionBtn;
