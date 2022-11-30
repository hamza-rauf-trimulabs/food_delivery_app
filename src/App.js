// import logo from "./logo.svg";
//import "./App.css";
import "./scss/App.scss";
import "./scss/NavBar.scss";
import "./scss/HeroSection.scss";
import "./scss/Divider.scss";
import "./scss/AccountSection.scss";
import "./scss/VarietiesSection.scss";
import "./scss/CheckoutSection.scss";
import "./scss/DownloadSection.scss";

import "./scss/FooterSection.scss";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Divider from "./components/Divider";
import AccountSection from "./components/AccountSection";
import VarietiesSection from "./components/VarietiesSection";
import CheckoutSection from "./components/CheckoutSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/FooterSection";

import CreateAccountImage from "./images/account_create.png";
import VarietiesPng from "./images/varieties.png";
import CheckoutSectionImage from "./images/checkout.png";
import Reusable from "./components/Reusable";
import "./scss/Reusable.scss";

const accountObj = {
  image: CreateAccountImage,
  title: "Create an account",
  text: "Create/login to an existing account to get started",
  paragraph: "An account is created with your email and a desired password",
};
const varietiesObj = {
  image: VarietiesPng,
  title: "Explore varieties",
  text: "Shop for your favorites meal as e dey hot.",
  paragraph: "Shop for your favorite meals or drinks and enjoy while doing it.",
};
const checkoutObj = {
  image: CheckoutSectionImage,
  title: "Checkout",
  text: "When you done check out and get it delivered.",
  paragraph: "When you done check out and get it delivered with ease.",
};

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
