import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900">
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Technologies />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
