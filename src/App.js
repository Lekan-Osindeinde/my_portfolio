import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
