import { useState} from "react";
import About from "./sections/About";
import Feature from "./sections/Feature";
import Hero from "./sections/Hero";
import NavBar from "./components/NavBar";
import Benefits from "./sections/Benefits";
import Expertise from "./sections/Expertise";
import Footer from "./sections/Footer";
import Menu from "./components/Menu";
import React from "react";


function App() {

  const [menuState, setMenuState] = useState(false);

  return (
    <div className="App">
     <NavBar state={menuState} setState={setMenuState}/>
     <Menu state={menuState} setState={setMenuState}/>
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
