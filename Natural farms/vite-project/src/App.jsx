
// import Counter from './components/CoponentWIllUnMount/counter'
// import Timer from './components/ComponentWIllUnMount/timer'
// import Header from './components/ComponentWIllUnMount/Product Listing(useState , useEffect , fetch api )/headerProduct'
// import ProductList from './components/ComponentWIllUnMount/Product Listing(useState , useEffect , fetch api )/ProductList'
// import CompA from './components/Prop Drilling/compA'
// import Toggler from './components/ComponentWIllUnMount/toggler'
// import ListOfProductsuseEffect from './components/useEffect'
// import ProductsuseState from './components/useState'

import CounterReducer from "./components/ComponentWIllUnMount/Reducer/useReducer_counter"

// import { userThemeContext } from './components/Context/userThemeContext'
// import CompA_Context from './components/Context/compAContext'
// import CompB_Context from './components/Context/compBContext'
// import CompC_Context from './components/Context/compCContext'


function App() {
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
      <CounterReducer />
    </>
  )
}

export default App
