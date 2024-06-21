import React, { Fragment, memo, useState } from 'react'
import { useGetValue } from '../../../hooks/useGetValue'
import ChangeFileImg from '../../../components/changeFileImg'
import { useCreateProductsMutation } from '../../../context/api/productsApi'

const initialState = {
    title: '',
    price: '',
    oldPrice: '',
    category: '',
    units: '',
    description: '',
    info: '',
}

const Create = () => {
    const { formData, handleChange } = useGetValue(initialState)
    const [files, setFiles] = useState('')
    const [createProduct, { data, isLoading }] = useCreateProductsMutation()

    const handleCreateProduct = (e) => {
        e.preventDefault()
        let formProduct = new FormData()
        formProduct.append('title', formData.title)
        formProduct.append('price', formData.price)
        formProduct.append('oldPrice', formData.oldPrice)
        formProduct.append('catgory', formData.category)
        formProduct.append('units', formData.units)
        formProduct.append('description', formData.description)
        formProduct.append('info', JSON.stringify([formData.info]))
        Array.from(files).forEach(img => {
            formProduct.append('urls', img, img.name)
        })
        createProduct(formProduct)
        console.log(data);
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
                <input value={formData?.category} onChange={handleChange}
                    type="text" name="category" placeholder="category" className='input input-info font-semibold bg-white' />
                <input value={formData?.units} onChange={handleChange}
                    type="text" name="units" placeholder="units" className='input input-info font-semibold bg-white' />
                <textarea value={formData?.description} onChange={handleChange}
                    type="text" name="description" placeholder="description" className='input input-info font-semibold bg-white' ></textarea>
                <textarea value={formData?.info} onChange={handleChange}
                    type="text" name="info" placeholder="info" className='input input-info font-semibold bg-white' ></textarea>
                <div className="grid grid-cols-4 gap-4 items-center justify-center">
                    <ChangeFileImg files={files} />
                </div>
                <div>
                    <input onChange={e => { setFiles(e.target.files) }} multiple accept='image/*' type="file" name="file" />
                    <br />
                </div>
                <button disabled={isLoading} className="btn btn-info">Create</button>
            </form>
        </Fragment>
    )
}

export default memo(Create)