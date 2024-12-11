import { useContext } from "react"
import { userContext } from "./userContext"

function CompA_Context() {
    const value = useContext(userContext)
    return (
        <>
            <h1>Component A, Displaying : {value}</h1>
        </>
    )
}

export default CompA_Context