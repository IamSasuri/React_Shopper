import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='my-[120px] mx-[10px] md:mx-[70px] xl:mx-[170px]'>
        <div className='flex'>
            <div className='flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border border-[#d0d0d0]'>Description</div>
            <div className='flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]'>Reviews (122)</div>
        </div>
        <div className='flex flex-col gap-[25px] border border-[#d0d0d0] p-[48px] pb-[70px]'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors) Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox