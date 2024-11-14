import { useContext } from "react"
import { cartContext } from "./cartContext"
import { reducerContext } from "./reducerCOntext"

function ElementC() {
    const value = useContext(cartContext)
    const dispatch = useContext(reducerContext)

    return (
        <div style={{ border: '2px solid', marginBottom: '2rem' }}>

            <h2>Element C : Cart : {value}</h2>
            <button onClick={() => dispatch({ type: 'ADD' })}>Add Item from Element C</button>
            <button onClick={() => dispatch({ type: 'REMOVE' })}>Delete Item</button>
        </div>
    )
}

export default ElementC

// in element c i'm inpoering cart related contexts to add cart button
// to my element c. TO access the cart 