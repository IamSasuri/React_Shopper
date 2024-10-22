import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import './CSS/ShopCategory.css'

const ShopCategory = ({ banner, category }) => {

  const { all_product } = useContext(ShopContext)

  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={banner} alt='' />
      <div className='shopcategory-indexSort mx-[10px] md:mx-[170px]'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className='flex flex-wrap mx-0 sm:mx-[50px] mt-[50px] gap-[30px]'>
        {all_product.map((item, index) => {
          if (category === item.category) {
            return <Item key={index} className={'flex-1 md:flex-none'} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
          }else{
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>Explore More</div>
    </div>
  )
}

export default ShopCategory