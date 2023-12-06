import { useEffect, useCallback } from "react";

import css from "./Backdrop.module.css";

const Backdrop = ({ children, setIsBackdropWithContentShow }) => {
  const closeBackdropByEscapePress = useCallback(
    ({ code }) => {
      if (code !== "Escape") return;

      setIsBackdropWithContentShow(false);
    },
    [setIsBackdropWithContentShow]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeBackdropByEscapePress);

    return () => {
      document.removeEventListener("keydown", closeBackdropByEscapePress);
    };
  }, [closeBackdropByEscapePress]);

  return (
    <div
      onClick={({ target, currentTarget }) => {
        if (target !== currentTarget && target.dataset.name !== "container")
          return;

        setIsBackdropWithContentShow(false);
      }}
      className={css.backdrop}
    >
      {children}
    </div>
  );
};

export default Backdrop;
