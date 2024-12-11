
// Generally,  we are harcoding the values of sweets and cakes

import { useReducer } from "react"


const initialState = {
    sweets: 10,
    cakes: 20
}

function reducer(state, action) {
    switch (action.type) {
        case 'Add_Sweets': return { ...state, sweets: state.sweets + 5 }
        case 'Add_Cakes': return { ...state, cakes: state.cakes + 10 }
        case 'Remove_Sweets': return { ...state, sweets: state.sweets - 1 }
        case 'Remove_Cakes': return { ...state, cakes: state.cakes - 1 }
        case 'Reset': return { cakes: 0, sweets: 0 }
        default: return state
    }

}


function SweetShop_Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <hr />
            <h1> Sai Sweet Shop</h1>
            <h2>Sweets : {state.sweets}</h2>
            <h2>Cakes: {state.cakes}</h2>
            <button onClick={() => dispatch({ type: 'Add_Sweets', value: 5 })}>Add Sweets</button>
            <button onClick={() => dispatch({ type: 'Remove_Sweets', value: 10 })}>Remove Sweets</button>
            <br /><br />
            <button onClick={() => dispatch({ type: 'Add_Cakes' })}>Add Cakes</button>
            <button onClick={() => dispatch({ type: 'Remove_Cakes' })}>Remove Cakes</button>
            <br /><br />
            <button onClick={() => dispatch({ type: 'Reset' })}>Empty Sweets</button>
        </>
    )
}
export default SweetShop_Reducer