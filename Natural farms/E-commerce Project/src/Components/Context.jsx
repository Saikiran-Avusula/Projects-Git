//  Now, it will became parent to all components 
// App.jsx component is passed as children props to CartProvider
// App.jsx will be act as a lower level, top will be  "Context.jsx" for easy acccess and clearner code 

import React, { useReducer } from "react";


export const CartStateContext = React.createContext(null)
export const CartDispatchContext = React.createContext(null)


// for initial state will be empty array
const initialState = {
    // 10. but ekada hard coded values tho kakunda, manam choopinche api items add avali
    // "cart: [{}]" //cart count is increased to 1, when hard coded values 
    // 11. dani kosam "Product.jsx" ki velli choodu,
    cart: []
}


// reducer function is used to update the state of the application
// edi cart initial state & cart lo add chesinapudu ie.,
// add to cart is clicked performs (items add into cart in simple)
// "cart: [...state.cart, action.payload]" add avutadhi 

export function Reducer (state, action){
    switch(action.type){
        case "ADD_TO_CART":
            // always ADD_TO_CART should be return object
            return {...state.cart, cart: [...state.cart, action.payload]};
            default:
                return state;
    }
}

// 1. Simple thing to do is, move to main.jsx 
// 2. App.jsx component ni just, cartProvider ni import chesukoni 
// 3. Wrap the App.jsx in cartProvider, So, App.jsx ande childern avutadi
// 4. we can pass easily, any props to parent (cartProvider), those can take by App.jsx 
// 5. ekada chesinattu ga 
// next..... after that. we need that cart lo unna vallus ni update cheialli, 
// 6. we need to update the cart, when we add to cart button clicked, Danikosam
// 7. Epudu header component ki velli, "cartStateContext" use chesi cart okka state,
// ni useContext hook use chesi state cart state ni update chestham
// For next steps move to header.jsx for "8th point"
export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <>
            {/* here, we provide <Providers> i.e., subscribers of both created createContexts */}
            <CartStateContext.Provider value={state}>
                <CartDispatchContext.Provider value={dispatch}>
                        {children}
                </CartDispatchContext.Provider>
            </CartStateContext.Provider>
        </>
    )
}






