
// import Counter from './components/CoponentWIllUnMount/counter'
// import Timer from './components/ComponentWIllUnMount/timer'
// import Header from './components/ComponentWIllUnMount/Product Listing(useState , useEffect , fetch api )/headerProduct'
// import ProductList from './components/ComponentWIllUnMount/Product Listing(useState , useEffect , fetch api )/ProductList'
// import CompA from './components/Prop Drilling/compA'
// import Toggler from './components/ComponentWIllUnMount/toggler'
// import ListOfProductsuseEffect from './components/useEffect'
// import ProductsuseState from './components/useState'
import { userContext } from './components/Context/userContext'
import { userThemeContext } from './components/Context/userThemeContext'
import CompB_Context from './components/Context/compBContext'
import CompC_Context from './components/Context/compCContext'

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
      <userContext.Provider value={`Sai-Kiran - passed as guest from create context file - {Provider}`}>
        <userThemeContext.Provider value={"Dark Mode"}>
          <CompB_Context />
          <CompC_Context />
        </userThemeContext.Provider>
      </userContext.Provider>


    </>
  )
}

export default App
