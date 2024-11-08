
import { useEffect, useState } from "react"
import ProductTemplate from "./ProductTemplate"
import './productStyleTemplate.css'
import Header from "./headerProduct"

function ProductList() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getProducts() {
            const response = await fetch('https://fakestoreapi.com/products') //gets reponse
            const getData = await response.json()
            setProducts(getData)
            console.log(getData.length)
        }
        getProducts()

    }, [])


    return (
        <>
            {/* <div><h1>List of Products Details - (raghu)</h1></div> */}
            <div>
                <Header />
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2 }}>
                {products.map(item =>
                    <ProductTemplate
                        key={item.key}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                        rating={item.rating.rate}
                        count={item.rating.count}
                    // rating={item.rating.rate}
                    />)}
            </div>
        </>
    )
}

export default ProductList