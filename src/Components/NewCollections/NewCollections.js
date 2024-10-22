import React from 'react'
import Item from '../Item/Item'
import new_collections from '../Assets/new_collections'

const NewCollections = () => {
  return (
    <div className='flex flex-col items-center gap-[10px] h-max mb-[130px]'>
        <h1 className='text-[#171717] text-[50px] text-center font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
        <div className='flex flex-wrap mx-0 sm:mx-[50px] mt-[50px] gap-[30px]'>
            {new_collections.map((item, index) => {
                return <Item key={index} className={'flex-1 md:flex-none'} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections;