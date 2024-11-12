import { useContext } from "react"
import { userContext } from "./userContext"
import { userThemeContext } from "./userThemeContext"

function CompC_Context() {
    const useContext_Value = useContext(userContext)
    const userThemeContext_Value = useContext(userThemeContext)
    return (
        <>
            <h1 >Component C as Consumer, Displaying: {useContext_Value}</h1>
            <h2>{userThemeContext_Value}</h2>
        </>
    )
}

export default CompC_Context