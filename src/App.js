import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Routes from './Routes'
// import './style/App'

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <Routes />
            </div>
        </BrowserRouter>
    )
}
