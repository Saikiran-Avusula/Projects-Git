import LogoText from "./Components/LogoText";

import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      {/* <div className="bg-[#0e0c1e] 	backdrop-blur-blur(8px)"> */}
      <div className="backdrop-blur bg-black/80">
        <Navbar />        {/* imported Nav bar */}
        <LogoText />


      </div>
    </>
  )
}
export default App; // export default App;