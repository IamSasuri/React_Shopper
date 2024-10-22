import React from 'react';
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
    return (
        <div className='h-max w-full hero flex flex-col lg:flex-row mb-[200px]'>
            <div className='flex flex-col order-2 lg:order-1 items-center text-center lg:mt-[170px] md:mx-auto mt-16 hero-left text-[60px] md:text-[100px] mx-[10px] flex flex-col justify-center gap-[20px] my-auto leading-[1.1]'>
                <h2 className='text-[#090909] text-[26px] font-semibold'>NEW ARRIVALS ONLY</h2>
                <div className='w-full'>
                    <div className='flex justify-center items-center gap-[20px]'>
                        <p>new</p>
                        <img className='w-[105px]' src={hand_icon} alt='' />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium cursor-pointer'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt='' />
                </div>
            </div>
            <div className='hero-right order-1 flex items-center justify-center'>
                <img src={hero_image} alt='' />
            </div>
        </div>
    )
}

export default Hero