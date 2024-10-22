import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter mx-auto w-full h-max mb-[100px] md:w-[65%] px-[50px] lg:px-[140px] flex flex-col lg:flex-row'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className='flex-wrap sm:flex-nowrap'>
            <input className='w-4/5' type='email' placeholder='Your Email id' />
            <button className='mt-[30px] sm:mt-0'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter