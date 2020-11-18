import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/cart/Cart'
import SingleProduct from './components/products/SingleProduct'
import Products from './components/products/Products'
import NotFound from './components/NotFound'
import Auth from './components/user/Auth'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            <Route path="/product/:id" component={SingleProduct} />
            <Route path="/auth" component={Auth} />
            <Route component={NotFound} />
        </Switch>
    )
}
