import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      {/* <div className="bg-[#0e0c1e] 	backdrop-blur-blur(8px)"> */}
      <div className="backdrop-blur bg-black/80">
        <Navbar />        {/* imported Nav bar */}
        <Main />
        <About />


      </div>
    </>
  )
}
export default App; // export default App;