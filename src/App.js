import About from "./components/About";
import ChatBubble from "./components/ChatBubble";
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
      <Portfolio />
      <About />
      <Experience />
      <Technologies />
      <Contact />
      <SocialLinks />
      <ChatBubble />
    </div>
  );
}

export default App;
