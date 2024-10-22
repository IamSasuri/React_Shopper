import React from 'react'
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers md:w-[65%] px-[50px] lg:px-[140px] flex flex-col lg:flex-row'>
        <div className='offers-left order-2 lg:order-1 lg:mt-0 mt-[20px]'>
            <h1 className='lg:text-[70px] md:text-[55px] text-[40px]'>Exclusive</h1>
            <h1 className='lg:text-[70px] md:text-[55px] text-[40px]'>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
            <img className='pt-[50px] order-1 lg:order-2' src={exclusive_image} alt='' />
    </div>
  )
}

export default Offers