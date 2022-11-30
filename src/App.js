// import logo from "./logo.svg";
//import "./App.css";
import "./scss/App.scss";
import "./scss/NavBar.scss";
import "./scss/HeroSection.scss";
import "./scss/Divider.scss";
import "./scss/AccountSection.scss";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Divider from "./components/Divider";
import AccountSection from "./components/AccountSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />

      <Divider />
      {/* <AccountSection /> */}
    </div>
  );
}

export default App;
