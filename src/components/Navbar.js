import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>

            <NavLink to="/products" activeClassName="active">Products</NavLink>

            <NavLink to="/cart" activeClassName="active" className="nav-cart-link">
                <div className="nav-cart">
                    <h4>Cart</h4>
                    <i className="fas fa-shopping-cart"></i>
                    <div className="cart-counter">{"cartCount"}</div>
                </div>
            </NavLink>
        </nav>
    )
}
