
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import ProductListing from './Components/ProductListing'
import Cart from './Components/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/cart'}>Cart</Link></li>
        </nav> */}

        {/* home */}
        <Routes>
          <Route path='/' element={
            <div>
              <Header />
              <ProductListing />
              <Footer />
            </div>}>
          </Route>

          {/* cart page */}
          <Route path='/cart' element={
            <div>
              <Header />
              <Cart />
              <Footer />
            </div>}>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App


