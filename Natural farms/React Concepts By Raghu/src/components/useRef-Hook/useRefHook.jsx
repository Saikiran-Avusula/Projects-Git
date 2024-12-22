// concept of useRef Hook 

import { useEffect, useRef, useState } from "react"

const UseRefHook = () => {
    // 1. for updating state and initial state (useState)
    const [count, setCount] = useState(0)

    // 3. we using useRef instead of useState & local varibale, 
    // because, 
    // in useState: every time we update state, it will re-render not neccessary needed
    // in local varible: local varible is can be, but it in future it may araise issues by using to store
    // the current value of state, it is not recommeded by react and react will understand store infromation
    // for "setCount" & not need to bother about re-rendering which is controlled by useRef and react
    // for this case we using useRef hook, for just string the current value

    const countTimerRef = useRef(null)
    // 4. useRef, it will return object and default property "current: null"


    // 2. for browser realated interacting methods and perform side effects (useEffect)
    useEffect(() => {
        // now using that property to store the current value in varible along property by useRef
        countTimerRef.current = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000);

        // cleanup function, when un-mounted copoenent
        return () => {
            clearInterval(countTimerRef.current)
        }
    })

    const countHandler = () => {
        clearInterval(countTimerRef.current)
    }


    return (
        <>
            <br />
            <h1>useRef Hook Concept</h1>
            <h2>Count: {count}</h2>
            <br />
            <button onClick={countHandler}>Stop Counter</button>
        </>
    )
}

export default UseRefHook