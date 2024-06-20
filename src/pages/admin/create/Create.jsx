import React, { Fragment, memo, useState } from 'react'
import { useGetValue } from '../../../hooks/useGetValue'

const initialState = {
    title: '',
    price: '',
    oldPrice: '',
    catgory: '',
    units: '',
    description: '',
    info: '',
}

const Create = () => {
    const { formData, handleChange } = useGetValue(initialState)
    const [files, setFiles] = useState('')

    const handleCreateProduct = (e) => {
        e.preventDefault()
        console.log(object);
    }

    return (
        <Fragment>
            <form onSubmit={handleCreateProduct} className='w-[600px] grid grid-cols-1 gap-3 font-semibold'>
                <h2>Create Products</h2>
                <input value={formData?.title} onChange={handleChange}
                    autoFocus type="text" name="title" placeholder="title" className='input input-info font-semibold bg-white' />
                <input value={formData?.price} onChange={handleChange}
                    type="number" name="price" placeholder="price" className='input input-info font-semibold bg-white' />
                <input value={formData?.oldPrice} onChange={handleChange}
                    type="number" name="oldPrice" placeholder="oldPrice" className='input input-info font-semibold bg-white' />
                <input value={formData?.catgory} onChange={handleChange}
                    type="text" name="category" placeholder="category" className='input input-info font-semibold bg-white' />
                <input value={formData?.units} onChange={handleChange}
                    type="text" name="units" placeholder="units" className='input input-info font-semibold bg-white' />
                <div>
                    <input onChange={e => { setFiles(e.target.files) }} accept='image/*' type="file" name="file" />
                </div>
            </form>
        </Fragment>
    )
}

export default memo(Create)