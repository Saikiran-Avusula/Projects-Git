import { useReducer } from "react"

const initialState = {
    count: 0
}


// action is an object type for :"Increment or Decrement"
function Reducer(state, action) {
    switch (action.type) {
        case 'increase': return { count: state.count + 1 }
        case 'decrease': return { count: state.count - 1 }
        default: return state
    }
}




function CounterReducer() {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <>
            <h2>Counter using Reducer & useReducer</h2>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
        </>
    )
}

export default CounterReducer