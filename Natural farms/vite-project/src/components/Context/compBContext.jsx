import { useContext } from "react"; //importing useContext to use the context in component-B
import { userContext } from "./userContext"
//importing to render the content to componenet-B by help of consumer-{B}

function CompB_Context() {
    const useContext_Value = useContext(userContext)

    return (
        <>

            <userContext.Provider value="Hello from B">
                <h1 >Component B  as Consumer , Displaying: {useContext_Value}</h1>
            </userContext.Provider>

            {/* Another way - but it's a headache */}
            {/* <userContext.Consumer>
                {value => <h2>Value from Context: {value}</h2>} //render
            <userContext.Consumer/> */}

        </>
    )
}

export default CompB_Context