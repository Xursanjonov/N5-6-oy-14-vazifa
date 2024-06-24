import React, { memo } from 'react'

const Loading = () => {
    return (
        <section className='w-full h-[80vh] flex items-center justify-center'>
            <span className="loading loading-spinner loading-lg text-secondary"></span>
        </section>
    )
}

export default memo(Loading)