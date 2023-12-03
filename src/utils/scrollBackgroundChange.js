export const scrollBackgroundChange = (fixedElClassName) => {
  const scrollPosition = window.scrollY;
  const fixedElement = document.querySelector(`.${fixedElClassName}`);

  if (scrollPosition > 1) {
    fixedElement.style.backgroundColor = "#ffffff";
  } else {
    fixedElement.style.backgroundColor = "#f3f5fa";
  }
};
