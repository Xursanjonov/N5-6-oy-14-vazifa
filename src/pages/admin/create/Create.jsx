import React, { Fragment, memo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateProductsMutation } from '../../../context/api/productsApi'

const initialState = {
    title: '',
    img: '',
    price: '',
    brand: '',
    category: '',
    count: '',
    info: '',
}

const Create = () => {
    const [formData, setFormData] = useState(initialState)
    const [createProduct, { data, isLoading, isSuccess }] = useCreateProductsMutation()
    const navigate = useNavigate()

    const handleCreateProduct = (e) => {
        e.preventDefault()
        createProduct(formData)
    }

    useEffect(() => {
        if (isSuccess) {
            navigate('/admin/manage')
        }
    }, [isSuccess])
    console.log(data);

    return (
        <Fragment>
            <form onSubmit={handleCreateProduct} className='w-[600px] grid grid-cols-1 gap-3 font-semibold'>
                <h2>Create Products</h2>
                <input value={formData?.title} onChange={(e) => setFormData(p => ({ ...p, title: e.target.value }))}
                    autoFocus type="text" name="title" placeholder="title" className='input input-info font-semibold bg-white' />

                <input value={formData?.price} onChange={(e) => setFormData(p => ({ ...p, price: e.target.value }))}
                    type="number" name="price" placeholder="price" className='input input-info font-semibold bg-white' />

                <input value={formData?.category} onChange={(e) => setFormData(p => ({ ...p, category: e.target.value }))}
                    type="text" name="category" placeholder="category" className='input input-info font-semibold bg-white' />

                <input value={formData?.brand} onChange={(e) => setFormData(p => ({ ...p, brand: e.target.value }))}
                    type="text" name="brand" placeholder="brand" className='input input-info font-semibold bg-white' />
                <input value={formData?.img} onChange={(e) => setFormData(p => ({ ...p, img: e.target.value }))}
                    type="text" name="img" placeholder="image" className='input input-info font-semibold bg-white' />

                <input value={formData?.info} onChange={(e) => setFormData(p => ({ ...p, info: e.target.value }))}
                    type="text" name="info" placeholder="info" className='input input-info font-semibold bg-white' />

                <input value={formData?.count} onChange={(e) => setFormData(p => ({ ...p, count: e.target.value }))}
                    type="text" name="count" placeholder="Count" className='input input-info font-semibold bg-white' />
                <button disabled={isLoading} className="btn btn-info">Create</button>
            </form>
        </Fragment>
    )
}

export default memo(Create)