import React, { memo } from 'react'
import { useGetUsersQuery } from '../../context/api/users'
import { Link } from 'react-router-dom';
import Loading from '../../components/loading/Loading';

const Users = () => {
    const { data, isLoading } = useGetUsersQuery()

    return isLoading ? <Loading /> : (
        <section>
            <div className="prodicts mx-0 grid grid-cols-5 gap-5">
                {
                    data?.map(user => (
                        <div key={user.id} className='cart w-[290px] h-[470px] mx-auto flex flex-col items-start justify-start gap-3 border-2 rounded-lg'>
                            <Link to={`/products/${user?.id}`} className='w-[100%] h-[290px] border-b-2'>
                                <img className='w-[100%] h-[100%] object-contain rounded-t-md' src={user?.img ? user?.img : emptyImg} alt={user?.username} />
                            </Link>
                            <div className="px-2">
                                <h4 className='text-lg text-black font-semibold'>
                                    <span className='font-bold text-blue-600'>Full name: </span>
                                    {user?.fullName}
                                </h4>
                                <p className='text-lg text-black font-semibold'>
                                    <span className='font-bold text-blue-600'>Username: </span>
                                    {user?.username}
                                </p>
                                <p className='text-lg font-semibold text-red-600'>
                                    <span className='font-bold text-blue-600'>Phone: </span>
                                    {user?.phoneNumber}
                                </p>
                                <p className='text-lg font-semibold text-black'>
                                    <span className='font-bold text-blue-600'>Age: </span>
                                    {user?.age}
                                </p>
                                <p className='text-lg font-semibold text-red-600'>
                                    <span className='font-bold text-blue-600'>isMarried ?: </span>
                                    {user?.isMarried ? '✅' : '❌'}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default memo(Users)