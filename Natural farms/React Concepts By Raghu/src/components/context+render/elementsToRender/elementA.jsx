import { useContext } from "react"
import { cartContext } from "./cartContext"

function ElementA() {
    const value = useContext(cartContext)
    return (
        <>
            <h2 style={{ border: '2px solid red' }}>
                Element A : Cart Items: {value}
            </h2>

        </>
    )
}

export default ElementA