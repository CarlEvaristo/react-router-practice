import React from "react"
import data from "./productsData"

function Products() {
    const products = data.map(item => <li key={item.id}>{item.name}</li>)
    const prices = data.map(item => <li key={item.id}> ${item.price}</li>)
    
    return (
        <>
            <h1>Products Page</h1>
            <div className="gridBox">
            <ul>
                {products}
            </ul>
            <ul className="prices">
                {prices}
            </ul>
            </div>
        </>
           )
}

export default Products