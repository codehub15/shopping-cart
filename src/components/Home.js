import React from 'react'
import { Link } from 'react-router-dom'
import '../style/title-effect.css'

export default function Home() {
    return (
        <div className="home">
            <p className="text text-above">Reading feeds the Imagination</p>
            <div className="title-wrapper">
                <h1 className="title" dataText="Book Shop">Book Shop</h1>
            </div>
            <p className="text text-below">With books you can go places</p>
            {/* 
            <h1>Book Shop</h1>

             <div className="slogan">
                <p>Take a look, Read a book</p>
            </div>
            */}
            <Link to="/products" className="btns checkout">check it out here</Link>
        </div>
    )
}
