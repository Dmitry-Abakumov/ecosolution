import CompanyInfo from "./CompanyInfo/CompanyInfo";
import About from "./About";
import ProducedElectricity from "./ProducedElectricity";
import SuccessfulCases from "./SuccessfulCases";
import Faq from "./Faq";
import ContactUs from "./ContactUs";

const Main = () => {
  return (
    <main>
      <CompanyInfo />
      <About />
      <ProducedElectricity />
      <SuccessfulCases />
      <Faq />
      <ContactUs />
    </main>
  );
};

export default Main;
