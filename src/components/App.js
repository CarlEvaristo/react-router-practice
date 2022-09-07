import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import Detail from "./Detail"
import { useLocation } from "react-router-dom";

function App() { 
    let location = useLocation();
    location = (location.pathname.split("/"))[1]
    const homeClass = location === "" ? "active" : ""
    const productClass = location === "products" ? "active" : ""

    return (
        <div className="container">
            <nav>
                <h1 className="logoTitle">Shoply</h1>
                <Link to="/" className={`menuItem marginLeft ${homeClass}`}>Home</Link>
                <Link to="/products" className={`menuItem ${productClass}`}>Products</Link>
            </nav>

            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={ <Detail />} />
                </Routes>
            </main>

            
        </div>
    )
}

export default App