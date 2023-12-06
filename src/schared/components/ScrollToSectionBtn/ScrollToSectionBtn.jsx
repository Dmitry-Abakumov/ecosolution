import css from "./ScrollToSectionBtn.module.css";

const ScrollToSectionBtn = ({ sectionId, className, onClick, children }) => {
  const scrollToSection = () => {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const section = document.getElementById(sectionId);

    const offsetToSectionFromTop = section.getBoundingClientRect().top;
    const headerHeight = screenWidth >= 1280 ? 92 : 114;

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
