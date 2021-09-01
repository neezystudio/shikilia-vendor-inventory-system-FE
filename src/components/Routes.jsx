import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import AddCategory from '../pages/AddCategory'
import AddProduct from '../pages/AddProduct'
import Categories from '../pages/Categories'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import Inventory from '../pages/Inventory'
import Orders from '../pages/Orders'
import Product from '../pages/Product'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Promotion from '../pages/Promotion'

import queryString from 'query-string'

function Routes({ handleLogOut }) {
    useEffect(() => {
        const { logout } = queryString.parse(window.location.search);

        if (logout === "true") {
            handleLogOut()
        }

    }, [window.location.search])

    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/add-category" component={AddCategory}/>
            <Route path="/products" component={Products}/>
            <Route path="/add-product" component={AddProduct}/>
            <Route path="/product" component={Product}/>
            <Route path="/inventory" component={Inventory}/>
            <Route path="/promotion" component={Promotion}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    )
}

export default Routes
