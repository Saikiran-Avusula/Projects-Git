import BannerSection from "./Components/BannerSection";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      {/* <div className="bg-[#0e0c1e] 	backdrop-blur-blur(8px)"> */}
      <div className="backdrop-blur bg-black/80">
        <Navbar />        {/* imported Nav bar */}
        <BannerSection />


      </div>
    </>
  )
}
export default App; // export default App;