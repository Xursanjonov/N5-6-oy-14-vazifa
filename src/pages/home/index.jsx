import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../context/api/productsApi';
import emptyImg from '../../assets/images/empty-img.webp'

const Home = () => {
    const { data } = useGetProductsQuery({ limit: 100 })
    const products = data?.data?.products;
    console.log(products);

    return (
        <section>
            <div className="prodicts mx-0 grid grid-cols-6 gap-5">
                {
                    products?.map(product => (
                        <div key={product.id} className='cart w-56 mx-auto flex flex-col items-center justify-center gap-3 border-2 rounded-lg'>
                            <Link to={`/products/${product.id}`}>
                                <img className='w-36 object-contain' src={product.urls[0] ? product?.urls[0] : emptyImg} alt={product?.title} />
                            </Link>
                            <p>{product?.title ? product?.title : 'Lorem ipsum dollor'}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default memo(Home)