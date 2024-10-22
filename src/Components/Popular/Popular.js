import React from 'react'
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-fit mb-[100px]'>
      <h1 className='text-[#171717] lg:text-[50px] text-[30px] font-semibold'>POPULAR IN WOMEN</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
      <div className='mx-auto mt-[50px] flex gap-[30px] overflow-x-auto w-full px-[30px]'>
        {data_product.map((item, index) => {
          return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular