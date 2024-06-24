import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(`https://6645c029b8925626f89301d2.mockapi.io/nusratilloh/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(er => console.error(er))
    }, [])
    console.log(product);

    return (
        <section className='w-[100%] my-10'>
            <div className="product-cart w-[1200px] h-[600px] mx-auto flex items-center justify-center gap-10 rounded-md bg-white">
                <div className="w-[600px] h-[500px]" >
                    <img className='w-[100%] h-[100%] cursor-pointer object-contain' src={product?.img} alt={product?.title} />
                </div>
                <div className="w-[500px] px-5 flex flex-col gap-3">
                    <div className='text-xl font-bold'>
                        <span className='text-green-500'>{product?.id}.</span> {product?.title}
                    </div>
                    <p className='w-[100%] font-bold'>{product?.brand}</p>
                    <p className='w-[100%] font-semibold'>{product?.category}</p>
                    <p className='w-[100%]'>{product?.info}</p>
                    <p className='flex-1 py-2 text-xl font-semibold text-green-500'>Price: ${product?.price}</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veniam consectetur cum quam repellendus quia libero nulla vitae itaque odio. Beatae culpa labore saepe in veritatis ea sequi totam iure!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default memo(ProductDetails)