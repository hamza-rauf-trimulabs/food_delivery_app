//Css imports
import "./scss/App.scss";
import "./scss/NavBar.scss";
import "./scss/HeroSection.scss";
import "./scss/Divider.scss";

import "./scss/DownloadSection.scss";
import "./scss/FooterSection.scss";
import "./scss/Reusable.scss";

//Components imports
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Divider from "./components/Divider";

import DownloadSection from "./components/DownloadSection";
import Footer from "./components/FooterSection";

// import AccountSection from "./components/AccountSection";
// import VarietiesSection from "./components/VarietiesSection";
// import CheckoutSection from "./components/CheckoutSection";
// import "./scss/AccountSection.scss";
// import "./scss/VarietiesSection.scss";
// import "./scss/CheckoutSection.scss";

//Reusable component and its data import against individual component as above.
import Reusable from "./components/Reusable";
import {
  accountObj,
  varietiesObj,
  checkoutObj,
} from "./components/ReusableData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Divider />
      <Reusable Obj={accountObj} Direction="row" />
      <Reusable Obj={varietiesObj} Direction="row-reverse" />
      <Reusable Obj={checkoutObj} Direction="row" />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
