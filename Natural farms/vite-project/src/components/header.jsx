import { useContext } from "react";
import { cartContext } from "./context+render/elementsToRender/cartContext";


function HeaderMain() {
    // Give the value as intial as cartContext to useContext
    const value = useContext([cartContext])  // now read information from context, so, we use useContext

    return (
        <>
            <h1 style={{ background: "black", color: "white", margin: '0', padding: '2rem' }}>
                Hello!  Main Header for a Project - cart{value}
            </h1>

        </>
    )
}

export default HeaderMain;