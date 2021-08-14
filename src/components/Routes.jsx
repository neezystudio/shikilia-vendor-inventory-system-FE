import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Categories from '../pages/Categories'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import Inventory from '../pages/Inventory'
import Orders from '../pages/Orders'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Promotion from '../pages/Promotion'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/customers" component={Customers}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/products" component={Products}/>
            <Route path="/inventory" component={Inventory}/>
            <Route path="/promotion" component={Promotion}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    )
}

export default Routes
