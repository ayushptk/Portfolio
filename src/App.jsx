import "./App.css"
import Herosec from "./compontent/hero";
import Navbar from "./compontent/navbar";
import "./compontent/hero.css"
import "./compontent/aboutme.css"
import SectionBarmain from "./compontent/Sectionbar";
import Aboutme from "./compontent/aboutme";
import Services from "./services";
import ContactForm from "./ContactForm";
const Maincomp = () => {
  return (
   <div>
    <Navbar />
 <Herosec />
< SectionBarmain />
<Aboutme />
<Services />
<ContactForm />
   </div>
  );
};

export default Maincomp;
