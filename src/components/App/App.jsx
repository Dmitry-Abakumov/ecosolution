import { useEffect } from "react";

import Header from "../Header";
import Main from "../Main";
import About from "../About";
import ProducedElectricity from "../ProducedElectricity";
import SuccessfulCases from "../SuccessfulCases";
import Faq from "../Faq";
import ContactUs from "../ContactUs";
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
      <main>
        <Main />
        <About />
        <ProducedElectricity />
        <SuccessfulCases />
        <Faq />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default App;
