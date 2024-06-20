import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'

const Layout = () => {

    return (
        <div className='layout max-w-[1920px] mx-auto'>
            <Header />
            <main className="main max-w-[1480px] mx-auto my-10"> <Outlet /> </main>
        </div>
    )
}

export default memo(Layout)