import './productStyleTemplate.css'

function ProductTemplate({id, title, price, image, description, rating, count}){
    return(
        <>
        <div key={id} className="container" >
            <h2 className="title" >{title}</h2>
            <img src={image} alt={title} width={'150px'} height={'150px'}/>
            <h3 className="price">Price: {price}</h3>
            <p> <span>Description:</span> {description}</p>
            <h4>⭐Rating: {rating}</h4>
            <h4>Stock Count Avilable: {count}</h4>
            <button id='cartButton'>🛒Add to Cart</button>
        </div>
        </>
    )
}

export default ProductTemplate