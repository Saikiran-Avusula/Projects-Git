
import CompC from "./compC"
function CompB({ propsContentA }) {
    return (
        <>
            <h1 style={{color: "blue"}}>Component B, Displaying: {propsContentA} </h1>
            <CompC propsContentB={propsContentA}/>
        </>
    )
}

export default CompB