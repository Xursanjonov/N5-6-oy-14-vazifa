import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('x-auth-token')

    const handleClicked = () => {
        if (token) {
            navigate('/admin/create')
        } else {
            navigate('/login')
        }
    }

    return (
        <header className='sticky top-0 w-[100%] mx-auto font-semibold text-black bg-white shadow-md shadow-gray-300'>
            <nav className='max-w-[1480px] py-2 text-lg mx-auto flex items-center justify-between'>
                <Link to={'/'} className='text-2xl font-bold'>Super Market</Link>
                <div className='flex items-center justify-center gap-8'>
                    <Link to={`/`} >Home</Link>
                    <Link to={`/about`} >About</Link>
                    <Link to={`/products`} >Products</Link>
                    <Link to={`/users`} >Users</Link>
                </div>
                <button onClick={handleClicked} className='w-24 btn btn-info text-lg font-bold'>{token ? 'Admin' : 'Login'}</button>
            </nav>
        </header>
    )
}

export default memo(Header)