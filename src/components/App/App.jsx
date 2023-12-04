import { useEffect } from "react";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

import { scrollBackgroundChange } from "src/utils";

import css from "../Header/Header.module.css";

const App = () => {
  useEffect(() => {
    document.addEventListener("scroll", () =>
      scrollBackgroundChange(css.header)
    );
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
