import React, { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetProductsQuery, usePutProductsMutation } from '../../../context/api/productsApi'
import trash from '../../../assets/icons/trash.svg'
import pen from '../../../assets/icons/pen.svg'

const Manage = () => {
    const { data } = useGetProductsQuery()
    const [show, setShow] = useState(null)
    const [updateItem, { data: updateData }] = usePutProductsMutation()
    
    const handleUpdate = (product) => {
        setShow(true)
        updateItem(product);
    }

    return (
        <div className="prodicts grid grid-cols-4 gap-5">
            {
                data?.map(product => (
                    <div key={product?.id} className='cart w-[350px] h-[360px] mx-auto flex flex-col items-start justify-start gap-3 border-2 rounded-lg'>
                        <Link to={`/products/${product?.id}`} className='w-[100%] h-[200px]'>
                            <img className='w-[100%] h-[200px] object-cover rounded-t-md' src={product?.img ? product?.img : emptyImg} alt={product?.title} />
                        </Link>
                        <div className="w-[100%] px-2">
                            <p className='font-bold text-lg'> {product?.title ?? 'Lorem ipsum dollor'}</p>
                            <p className='text-md text-blue-600 font-semibold'>{product?.brand}</p>
                            <p>{product?.category}</p>
                            <div className="w-[100%] flex items-center justify-between pe-2">
                                <p className='text-md font-semibold text-red-500'>${product?.price}</p>
                                <button onClick={() => handleUpdate(product)} className='p-2 rounded-md text-lg bg-orange-500'>
                                    <img width={15} height={15} src={pen} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default memo(Manage)