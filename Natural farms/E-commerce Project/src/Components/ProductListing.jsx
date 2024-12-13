import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"



const ProductListing = () => {

    // useState is used because to get the products and set intial states
    const [products, setProducts] = useState([])

    // it wil return promise, so ".then" is used with callback 
    // Now, storing the data in "setProducts" of "useState" 
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => setProducts(res.data))
    }, [])
    // console.log(products);


    return (
        <>
            {/* <h1 style={{ textAlign: 'center', }}>Product List Page</h1> */}
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2 }}>
                {products.map(prod =>
                    <Product
                        key={prod.id}
                        title={prod.title}
                        price={prod.price}
                        category={prod.category}
                        description={prod.description}
                        image={prod.image}
                        rating={prod.rating.rate}
                        stock={prod.rating.count}
                    />)
                }
            </div>

        </>
    )
}

export default ProductListing