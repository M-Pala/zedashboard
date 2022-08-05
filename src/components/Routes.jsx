import React from 'react'
import { Routes as RouterRoutes, Route, Switch } from 'react-router-dom'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'


const Routes = () => {
  return (
    <RouterRoutes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/customers' element={<Customers/>}/>
    </RouterRoutes>
  )
}

export default Routes