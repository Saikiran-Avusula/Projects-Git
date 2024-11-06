import { useEffect, useState } from "react";

function ListOfProductsuseEffect() {

    const [products, setProducts] = useState([0])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json())
            .then(jsonData => setProducts(jsonData))
    }, [])

    return (
        <>
            <h1>Rendered Prodcuts using useEffect() hook </h1>
            {products.map(item => {
                return (
                    <div key={item.id}>
                        <h3>Title: {item.title}</h3>
                        <p>Price: {item.price}</p>
                        <img src={item.image} alt={item.title} width={"150px"} height={"150px"} />
                    </div>)

            })}
        </>
    )





}


export default ListOfProductsuseEffect;