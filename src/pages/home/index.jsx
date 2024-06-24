import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../context/api/productsApi';
import emptyImg from '../../assets/images/empty-img.webp'

const Home = () => {
    const { data } = useGetProductsQuery()

    return (
        <section>
            <div className="prodicts mx-0 grid grid-cols-4 gap-5">
                {
                    data?.map(product => (
                        <div key={product?.id} className='cart w-[300px] h-[340px] mx-auto flex flex-col items-start justify-start gap-3 border-2 rounded-lg'>
                            <Link to={`/products/${product?.id}`} className='w-[100%] h-[200px]'>
                                <img className='w-[100%] h-[200px] object-cover rounded-t-md' src={product?.img ? product?.img : emptyImg} alt={product?.title} />
                            </Link>
                            <div className="px-2">
                                <p>{product?.title ?? 'Lorem ipsum dollor'}</p>
                                <p>{product?.category ?? 'Lorem ipsum dollor'}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default memo(Home)