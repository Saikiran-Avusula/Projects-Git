import PropTypes from 'prop-types';
import './Product.css'


const Product = ({ id, title, price, category, description, image, rating, stock }) => {
    return (
        <>
            <div key={id} className="container" >
                <h3 className="title" >{title}</h3>
                <img src={image} alt={title} width={'150px'} height={'150px'} />
                <h3 className="price">Price: {price}</h3>
                <p> <span>Category:</span> {category}</p>
                <p>{description}</p>
                <h4>⭐Rating: {rating}</h4>
                <h4>Stock Count Avilable: {stock}</h4>
                <button id='cartButton'>🛒Add to Cart</button>
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