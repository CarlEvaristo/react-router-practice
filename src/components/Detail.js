import React from "react"
import {useParams} from "react-router-dom"
import data from "./productsData"

function Detail() {
    const {id} = useParams()
    const item = (data.filter(item => item.id === Number(id)))[0]
    return (
        <>
            <h1>{item.name}</h1>
            <h3>Price: ${item.price}</h3>
            <p>{item.description}</p>
        </>

    )
}

export default Detail