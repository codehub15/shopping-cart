import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './style/app.css'

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
