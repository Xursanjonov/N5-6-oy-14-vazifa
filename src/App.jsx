import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import Users from './pages/users'
import Login from './pages/login'
import Auth from './pages/auth'
import Admin from './pages/admin'
import Create from './pages/admin/create/Create'
import Manage from './pages/admin/manage/Manage'

const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='users' element={<Users />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='/' element={<Auth />} >
          <Route path='admin/' element={<Admin />} >
            <Route path='create' element={<Create />} />
            <Route path='manage' element={<Manage />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default memo(App)