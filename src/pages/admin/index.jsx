import React, { Fragment, memo } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import AdminHeader from '../../components/admin-header'

const Admin = () => {
    return (
        <Fragment>
            <div className='flex justify-between max-w-[1920px] items-start'>
                <Sidebar />
                <div className='w-[1560px] flex flex-col gap-10'>
                    <AdminHeader />
                    <div className="w-[1560px] px-8 text-black">
                        <Outlet />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Admin)