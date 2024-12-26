import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './componenets/Home-Section/Home';
import Navbar from './componenets/Navbar-section/Navbar';

import Service from './componenets/Service-Section/Service';
import About from './componenets/About-section/About';
import Tickets from './componenets/Tickets-Section/Tickets';
import Footer from './componenets/Footer-Section/Footer';
import Details from './componenets/Tickets-Section/Details-Section/Details';
import CheckOut from './componenets/Tickets-Section/checkout/CheckOut';
import Invoice from './componenets/Tickets-Section/incoice/Invoice';
// import CheckOut from './componenets/Tickets-Section/checkout/CheckOut';

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
            <Route path='/bus-tickets' element={<div> <Tickets /></div>} />
            <Route path='/bus-tickets/checkout' element={<div><CheckOut /></div>} />
            <Route path='/bus-tickets/payment' element={<div><Invoice /></div>} />

            {/* Details */}
            <Route path='/bus-tickets/detail' element={<div> <Details /></div>} />
          </Routes>

          {/* Footer */}
          {/* This is Footer section */}
          <Footer />
        </main>
      </Router>
    </>
  );
}

export default App;