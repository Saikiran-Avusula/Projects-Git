import { useContext } from "react"
import { CartStateContext } from "./Context"
import Product from "./Product"

// 16. Herem we have to take the state, provided by "CartStateContext".
// we import it. and use here, for dispaly(read items inthe "state", i.e., in array) ADD_TO_CART products in home page clicked items
// So, we used only "state" 
// 17. And, also use useContext 


const Cart = () => {
    const state = useContext(CartStateContext)

    return (
        <>
            <h1 style={{ textAlign: 'center', color: "red" }}>Check Your Cart Items</h1>

            {/* 18. move to product listing page where we maped every product, just use same function */}
            {/* herem we need to diaply product not all details of items
            so we use "map" function to display all items in cart 
            and we use "key" for each item, so that we can identify each item
            */}

            {/* "cartItems" taken from initial state in "context.jsx" */}
            {state.cart.map((item) =>
                <Product key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />)}
        </>
    )
}

export default Cart