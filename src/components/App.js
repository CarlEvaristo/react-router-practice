import React from "react"
import { Link, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Products from "./Products"
import Detail from "./Detail"
import { useLocation } from "react-router-dom";

function App() { 
    const [menuOn, setMenuOn] = React.useState(false)

    let location = useLocation();
    location = (location.pathname.split("/"))[1]
    const active = path => path === "/"+location ? "active" : ""

    function toggleMenu() {
        setMenuOn(prev => !prev)
    }

    return (
        <div className="container">
            <nav>
                <h1 className="logoTitle">Shoply</h1>
                <div className={`menu ${ menuOn ? "moveDown" : undefined }`} >
                    <Link to="/" className={`menuItem ${active("/")}`}>Home</Link>
                    <Link to="/products" className={`menuItem ${active("/products")}`}>Products</Link>
                </div>

                <div className={`hamburgerBtn`} onClick={toggleMenu}>
                    <div className={`hamburgerBar ${menuOn ? "topBar" : undefined}`}></div>
                    <div className={`hamburgerBar ${menuOn ? "middleBar" : undefined}`}></div>
                    <div className={`hamburgerBar ${menuOn ? "bottomBar" : undefined}`}></div>
                </div>
            </nav>

            <main className={menuOn ? "moveDown" : undefined} >
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