import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/footer"
import About from "./components/About/about"
import Team from "./components/Team/team"
import FaqChapter from "./components/FaqChapter/faqchapter"
import Contacts from "./components/Contacts/contacts"
import Insta from "./components/Insta/insta"
import Selection from "./components/Selection/selectform"
import Catalog from "./components/Catalog/catolog"

function App() {
    return ( 
      <div>
        <Hero/>
        <Catalog /> 
        <About />
        <Selection/>
        <Team />
        <FaqChapter />
        <Contacts />
        <Insta />
        <Footer/>
      </div>     
    )
};

export default App;

