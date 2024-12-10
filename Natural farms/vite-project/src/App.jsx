
// import Counter from './components/CoponentWIllUnMount/counter'
// import Timer from './components/ComponentWIllUnMount/timer'
// import ProductList from './components/ComponentWIllUnMount/Product Listing(useState , useEffect , fetch api )/ProductList'
// import CompA from './components/Prop Drilling/compA'
// import Toggler from './components/ComponentWIllUnMount/toggler'
// import ListOfProductsuseEffect from './components/useEffect'
// import ProductsuseState from './components/useState'

// import CounterReducer from "./components/Reducer/useReducer_counter"
// import CustomShop from "./components/Reducer/useReducer_CustomShop"
// import SweetShop_Reducer from "./components/Reducer/useReducer_sweetshop"

// import { userThemeContext } from './components/Context/userThemeContext'
// import CompA_Context from './components/Context/compAContext'
// import CompB_Context from './components/Context/compBContext'
// import CompC_Context from './components/Context/compCContext'

import HeaderMain from "./components/header"
// import ElementA from "./components/context+render/elementsToRender/elementA"
// import { useReducer } from "react"
// import { cartContext } from "./components/context+render/elementsToRender/cartContext"
// import { reducerContext } from "./components/context+render/elementsToRender/reducerCOntext"
// import ElementC from "./components/context+render/elementsToRender/elementC"







// Importing react router DOM related Stuff
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/React Router DOM/Home"
import Checkout from "./components/React Router DOM/Checkout"
import Services from "./components/React Router DOM/Services"




// const initialState = {
//   count: 0
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD': return { count: state.count + 1 }
//     case 'REMOVE': return { count: state.count - 1 }
//     default: return state
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      {/* <Counter /> */}
      {/* <ProductsuseState />
      <ListOfProductsuseEffect /> */}
      {/* <Counter/> */}

      {/* ComponentWIllUnMount check, functions of counter & toggler in same folder includes useEffect & cleanup function why is used*/}
      {/* <Toggler /> */}
      {/* <Timer /> */}


      {/* Product listing by Raghu - using useState , useEffect , fetch api  */}

      {/* <ProductList /> */}


      {/* Concept : Props Drilling */}
      {/* <CompA /> */}

      {/* Concept : context  */}
      {/* Stage2: Multiple context  */}
      {/* <userThemeContext.Provider value='Kiran from App.jsx'>

        <userThemeContext.Provider value={"Dark Mode from App.jsx"}>
          <CompA_Context />
          <CompB_Context />
          <CompC_Context />
        </userThemeContext.Provider>
      </userThemeContext.Provider> */}



      {/* counter using Reduser and useReducer */}
      {/* <CounterReducer /> */}

      {/* displaying sweets shop items uisng complex state - hardcoded values*/}
      {/* Sai Sweet Shop */}
      {/* <SweetShop_Reducer /> */}

      {/* displaying custom shop of custom values */}
      {/* <CustomShop /> */}


      {/* context+ reducer : here, app.jsx acts as top element to share the data to its childs*/}
      {/* wrapping those into cartContext.Provider */}


      {/* add to cart feature using simple count values (hard codded values) */}
      {/* <cartContext.Provider value={state.count}> */}
      {/**we maintaining the state, provided state to cartContext */}
      {/* <reducerContext.Provider value={dispatch}> */}
      { /* SO, i'm adding a cart button to element c, were as i can add that in any element. Provided separate context to it */}
      {/* So, For element C created new reducerContext, to pass the state infomation stored & wrapped into main cart context  */}
      {/* <HeaderMain />
          <ElementA />
          <ElementC />
          <button onClick={() => dispatch({ type: 'ADD' })}>Add to Cart</button>
          <button onClick={() => dispatch({ type: 'REMOVE' })}>Delete Item</button> */}
      {/* </reducerContext.Provider> */}
      {/* </cartContext.Provider> */}

      {/* Reacr Router DOM implemenataion */}
      {/* 1. Install React-router DOM from Node.js
          2. Import BrowserRouter, Router, Routes, Link from react 
          3.
      */}

      <BrowserRouter>
        <nav>
          <ol>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
          </ol>
        </nav>
        <Routes>
          <Route path='/' element={<><Home /><HeaderMain /></>} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
