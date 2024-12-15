import PropTypes from 'prop-types';
import './Product.css'
import { CartDispatchContext } from './Context';
import { useContext } from 'react';


const Product = ({ id, title, price, category, description, image, rating, stock }) => {

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
                        type: 'ADD_TO_CART',
                        // here, keys & values are same we cn pass only single terms 
                        payload: { id: id, title: title, price: price, category: category, description: description, image: image, rating: rating, stock: stock }
                    })}>
                    🛒Add to Cart</button>
            </div>
        </>
    );
};


Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
};



export default Product