import { useState } from "react"
import CompB from "./compB"
function CompA() {

    const [content] = useState("Props-Drilling")
    return (
        <>
            <h1 style={{color: "green"}}>Component A, Displaying : {content}</h1>
            <CompB propsContentA={content}/>

        </>
    )
}

export default CompA