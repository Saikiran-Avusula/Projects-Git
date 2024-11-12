
import { useState } from "react"
// import Counter from "./counter"
import Timer from "./timer"

function Toggler() {
    //if you want
    const [flag, setFlag] = useState(true)

    const clickHandler = () => {
        setFlag(!flag)
    }

    return (
        <>
            {flag ? <Timer /> : <h3 style={{ backgroundColor: "blue" }}>Good Night...!</h3>}
            {/* {flag ? <body style={{ backgroundColor: "white" }}></body> : <body style={{ backgroundColor: "blue" }}></body>} */}
            <button onClick={clickHandler}>Toogle to change</button>
        </>
    )
}
export default Toggler