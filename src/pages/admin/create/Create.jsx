import React, { memo } from 'react'

const Create = () => {
    const handleCreateProduct = (e) => {
        e.preventDefault()
        console.log(object);
    }

    return (
        <form onSubmit={handleCreateProduct}>
            <h2>Create Products</h2>
            <input autoFocus type="text" name="title" placeholder="title" className='input input-info font-semibold bg-white' />
            <input type="number" name="price" placeholder="price" className='input input-info font-semibold bg-white' />
            <input type="number" name="oldPrice" placeholder="oldPrice" className='input input-info font-semibold bg-white' />
        </form>
    )
}

export default memo(Create)