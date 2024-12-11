import { useReducer } from "react"


const intialState = {
    cakes: 60,
    sweets: 50
}


function Reducer(state, action) {
    switch (action.type) {
        case 'ADD_SWEETS': return { ...state, sweets: state.sweets + action.value }
        case 'ADD_CAKES': return { ...state, cakes: state.cakes + action.value }
        case 'REMOVE_SWEETS': return { ...state, sweets: state.sweets - action.value }
        case 'REMOVE_CAKES': return { ...state, cakes: state.cakes - action.values }
        default: return state
    }

}


function CustomShop() {

    const [state, dispatch] = useReducer(Reducer, intialState)
    return (
        <>
            <hr />
            <h1 style={{ color: 'red' }}>Custom Sweet Shop </h1>
            <p style={{ color: "green" }}>Custom values by action.value </p>
            <h2>Cakes: {state.cakes} 🍰</h2>
            <h2>Sweets: {state.sweets} 🍩</h2>

            <button onClick={() => dispatch({ type: 'ADD_SWEETS', value: 10 })}>Add Sweets</button>
            <button onClick={() => dispatch({ type: 'REMOVE_SWEETS', value: 20 })}>Remove Sweets</button>
            <br /><br />
            <button onClick={() => dispatch({ type: 'ADD_CAKES', value: 20 })}>Add Cakes</button>
            <button onClick={() => dispatch({ type: 'REMOVE_CAKES', values: 40 })}>Remove Cakes</button>

        </>
    )
}

export default CustomShop