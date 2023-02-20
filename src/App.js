import About from "./sections/About";
import Feature from "./sections/Feature";
import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Benefits from "./sections/Benefits";
import Expertise from "./sections/Expertise";
import Footer from "./sections/Footer";


function App() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <About />
     <Feature />
     <Benefits />
     <Expertise />
     <Footer />
    </div>
  );
}

export default App;
