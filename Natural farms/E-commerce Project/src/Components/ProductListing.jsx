import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"
import { ThreeCircles } from "react-loader-spinner"



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
            <div>
                {products.length > 0 ?
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2 }}>
                        {products.map(item =>
                            <Product
                                key={item.id}
                                id={item.id} //id also should pass as prop to cart.jsx
                                title={item.title}
                                price={item.price}
                                category={item.category}
                                description={item.description}
                                image={item.image}
                                rating={item.rating.rate}
                                stock={item.rating.count}
                            />)
                        }
                    </div>
                    :
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, padding: "20rem" }}>
                        <ThreeCircles
                            visible={true}
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="three-circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>


                }
            </div>




        </>
    )
}

export default ProductListing