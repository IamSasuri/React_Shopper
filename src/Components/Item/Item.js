import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ className, id, image, name, new_price, old_price }) => {
    return (
        <Link className={className} to={`/product/${id}`}>
            <div className='w-[350px] hover:scale-[1.05] transition duration-300 mx-auto'>
                <img src={image} alt='' />
                <p className='my-[6px]'>{name}</p>
                <div className='flex gap-[20px]'>
                    <div className='text-[#374151] text-[18px] text-semibold'>${new_price}</div>
                    <div className='text-[#8c8c8c] text-[18px] font-medium line-through'>${old_price}</div>
                </div>
            </div>
        </Link>
    )
}

export default Item