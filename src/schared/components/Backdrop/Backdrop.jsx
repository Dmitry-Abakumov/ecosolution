import { useEffect, useCallback } from "react";

import css from "./Backdrop.module.css";

const Backdrop = ({ children, setIsMenuOpen }) => {
  const closeBackDropByEscapePress = useCallback(
    ({ code }) => {
      if (code !== "Escape") return;

      setIsMenuOpen(false);
    },
    [setIsMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeBackDropByEscapePress);

    return () => {
      document.removeEventListener("keydown", closeBackDropByEscapePress);
    };
  }, [closeBackDropByEscapePress]);

  return (
    <div
      onClick={({ target, currentTarget }) => {
        if (target !== currentTarget && target.dataset.name !== "container")
          return;

        setIsMenuOpen(false);
      }}
      className={css.backdrop}
    >
      {children}
    </div>
  );
};

export default Backdrop;
