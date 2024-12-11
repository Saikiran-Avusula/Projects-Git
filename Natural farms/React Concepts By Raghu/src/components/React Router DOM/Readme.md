1. React Router is a third-party library, not part of React.
2. it's widely used for client-side routing.
3. the three main components are:
    - BrowserRouter (or HashRouter)
    - Routes
    - Route 
4. Link is used for client-side routing without full page reloads.

jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}
