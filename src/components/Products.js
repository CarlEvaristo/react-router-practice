import React from "react"
import data from "./productsData"
import { Link } from "react-router-dom"

function Products() {
    const products = data.map(item => (
    <li key={item.id}>
        <Link to={`/products/${item.id}`} className="linkItem"><span>{item.name}</span>  <span>$ {item.price},-</span></Link>
    </li>))
    // const prices = data.map(item => <li key={item.id}> ${item.price}</li>)
    
    return (
        <>
            <h1>Products Page</h1>
            <div className="gridBox">
            <ul>
                {products}
            </ul>
            </div>
        </>
           )
}

export default Products