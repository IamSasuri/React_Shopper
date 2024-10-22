import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = ({ product }) => {
    return (
        <div className='flex items-center gap-[8px] text-[#5e5e5e] text-[16px] font-semibold my-[60px] mx-[25px] lg:mx-[170px]'>
            HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' /> {product.category?.toUpperCase()}
        </div>
    )
}

export default Breadcrum