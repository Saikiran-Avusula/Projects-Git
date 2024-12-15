
// Note: Start from here, to get clear idea about this component
// We created this because, to manage the delete itmes from items
// So, we just copied first as content from Product.jsx, any way
// we added "ADD_TO_CART" case, similarly, 
// mainatinag the "DELETE_FROM_CART"
// to this purpose we maintaing separate componenet, due to any we make any compoenent
// related to delete items from cart it will effect compelete code and may araise issues in future and difficult to understand

import PropTypes from 'prop-types';
import './Product.css'
import { CartDispatchContext } from './Context';
import { useContext } from 'react';

const ProductCart = ({ id, title, price, category, description, image, rating, stock }) => {
    // 12. ekada CartDispatchContext, taking power fromit and using 
    // 13. & used dispatch method, because, here we have products, So, we disptaching them
    // and dispatch method is used here
    // "CartDispatchContext" it will provide reference to disptach, 
    // an action to initial state update state count

    const dispatch = useContext(CartDispatchContext);

    // 14. Now, when button is clicked product have to add to cart, just add that feature 
    // in that add dispatch method with an action 

    // const handleAddToCart = () => {
    //     // 15. Here we are adding product to cart, so we are using dispatch method,
    //     // and we are passing an action to it, which is an object, that has product id
    //     // and quantity, quantity is 1, because we are adding one product to cart
    // 16th point move to add items into cart, when add_to_cart is clicked "Cart.jsx"

    return (
        <>
            <div key={id} className="container" >
                <h3 className="title" >{title}</h3>
                <img src={image} alt={title} width={'150px'} height={'150px'} />
                <h3 className="price">Price: {price}</h3>
                <p> <span>Category:</span> {category}</p>
                <p>{description}</p>
                <h4>⭐Rating: {rating}</h4>
                <h4>Stock: {stock}</h4>

                {/* payload we need to pass the product information as Object as we passed same props like product details */}
                <button id='cartButton' title={title}
                    onClick={() => dispatch({
                        type: 'DELETE_FROM_CART',
                        // here, keys & values are same we cn pass only single terms 
                        payload: { id: id, title: title, price: price, category: category, description: description, image: image, rating: rating, stock: stock }
                    })}>
                    🗑️Delete Item
                </button>
            </div>
        </>
    );
};


ProductCart.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
};



export default ProductCart;