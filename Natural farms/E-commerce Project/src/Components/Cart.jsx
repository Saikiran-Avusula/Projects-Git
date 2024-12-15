import { useContext } from "react"
import { CartStateContext } from "./Context"
import ProductCart from "./ProductCart"


// 16. Here we have to take the state, provided by "CartStateContext".
// we import it. and use here, for dispaly(read items inthe "state", i.e., in array) ADD_TO_CART products in home page clicked items
// So, we used only "state" 
// 17. And, also use useContext 


const Cart = () => {
    const state = useContext(CartStateContext)

    return (
        <>
            <h1 style={{ textAlign: 'center', color: "red" }}>Your Cart Items</h1>

            {/* 18. move to product listing page where we maped every product, just use same function */}
            {/* herem we need to diaply product not all details of items
            so we use "map" function to display all items in cart 
            and we use "key" for each item, so that we can identify each item
            */}



            {/* "cartItems" taken from initial state in "context.jsx" */}
            {state.cart.length > 0 ?
                (state.cart.map((item) =>
                    <ProductCart key={item.id}
                        id={item.id} // id is passed a props from ProductListing.jsx
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        stock={item.stock}
                    />)
                ) :
                (<h2 style={{ textAlign: 'center', color: "blue", padding: '5rem' }}>
                    😒Your cart is empty!😫</h2>)
            }
        </>
    )
}

export default Cart