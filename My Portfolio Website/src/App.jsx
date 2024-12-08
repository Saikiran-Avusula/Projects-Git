import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

const App = () => {
  return (
    <>
      {/* <div className="bg-[#0e0c1e] 	backdrop-blur-blur(8px)"> */}
      <div className="backdrop-blur bg-black/80">
        <Navbar />        {/* imported Nav bar */}
        <Main />
        <About />
        <Work />
        <Skills />

      </div>
    </>
  )
}
export default App; // export default App;