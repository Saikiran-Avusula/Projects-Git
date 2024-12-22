import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './componenets/Home-Section/Home';
import Navbar from './componenets/Navbar-section/Navbar';

import Service from './componenets/Service-Section/Service';
import About from './componenets/About-section/About';
import Tickets from './componenets/Tickets-Section/Tickets';

const App = () => {
  return (
    <>
      <Router>
        <main className="w-full flex flex-col bg-neutral min-h-screen">
          {/* Navbar */}
          <Navbar />
          <Routes>
            <Route path='/' element={<div> <Home /></div>} />
            <Route path='/about' element={<div> <About /></div>} />
            <Route path='/service' element={<div> <Service /></div>} />
            <Route path='/tickets' element={<div> <Tickets /></div>} />
          </Routes>

          {/* Footer */}
          {/* This is Footer section */}
        </main>
      </Router>
    </>
  );
}

export default App;