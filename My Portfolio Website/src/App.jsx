import About from "./Components/About";
import Connect_Me from "./Components/Connect_Me";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";



const App = () => {
  return (
    <>

      <div className="backdrop-blur bg-black/80">
        <Navbar />        {/* imported Nav bar */}
        <Main />
        <About />
        <Projects />
        <Skills />
        <Connect_Me />
        <Footer />
      </div>
    </>
  )
}
export default App; // export default App;