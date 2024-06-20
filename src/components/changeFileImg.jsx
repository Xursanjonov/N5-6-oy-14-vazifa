import React, { Fragment, memo } from 'react'

const ChangeFileImg = ({ files }) => {
    return (
        <Fragment>
            {
                Object.values(files).map((el, inx) => (
                    <img src={URL.createObjectURL(el)} className='w-52 rounded-xl' key={inx} alt="" />
                ))
            }
        </Fragment>
    )
}

export default memo(ChangeFileImg)