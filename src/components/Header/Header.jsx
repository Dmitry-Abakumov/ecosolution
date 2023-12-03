import Navbar from "./Navbar";

import Container from "src/schared/components/Conatiner";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
