import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style/nav.css'

function Navbar({ cart, user }) {
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty
        });
        setCartCount(count);
    }, [cart, cartCount])

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className="logo"><i className="fas fa-book-reader"></i> BookShop</NavLink>
                </li>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products" activeClassName="active">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/auth" activeClassName="active">
                        {!user.isLogin ? "Login" : "Logout"}
                    </NavLink>
                </li>
                <li className="nav-cart">
                    <NavLink to="/cart" activeClassName="active" className="nav-link-cart">
                        <p>Cart</p>
                        <p><i className="fas fa-shopping-cart"></i></p>
                        <p className="cart-counter"><span className="bold"> {cartCount} </span></p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    // console.log("state.user.name:", state.user.user.name)
    return {
        cart: state.shop.cart,
        user: state.user.user
    }
}

export default connect(mapStateToProps)(Navbar);
