import { useEffect, useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)
    let c = 0
    useEffect(() => {
        c++
        console.log("useEffect is executed", c);
    }, [count, c])


    function ClickHandler() {
        setCount(1)
    }




    return (
        <>
            <h2>Counter = {count}</h2>
            <button onClick={ClickHandler}>Click me</button>
        </>
    )
}

export default Counter;


// intailly, we gets output as
// 0 , due to strict mode
// 0 , due useEffect  because every update in state useEffect will execute evrry time
// for controlling it we use dependency array/.
// Dependency array: given count as "initial value" to it
// to stopping "setCount(1)" => count will be count=1 after, it no updates, it will not render the further it stops
// Rememeber: but every change in component useEffect will execute to update to V-DOM