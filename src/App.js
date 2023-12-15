import React from "react";
import Navbar from "./components/Navbar";
import Main from './components/Main';
import Menu from './components/Menu';
import Projects from './components/Projects';
import About from './components/About';



function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Menu />
      <Projects />
      <About />
    </div>
  );
}

export default App;
