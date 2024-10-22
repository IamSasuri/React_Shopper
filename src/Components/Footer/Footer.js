import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import { Link } from 'react-router-dom'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {

    const items = [{ name: 'Company', path: '/' }, { name: 'Products', path: '/' }, { name: 'Offices', path: '/' }, { name: 'About', path: '/' }, { name: 'Contact', path: '/' }]

    return (
        <div className='flex flex-col justify-center items-center gap-[50px]'>
            <div className='flex items-center gap-[20px]'>
                <img src={footer_logo} alt='' />
                <p className='text-[#383838] text-[46px] font-bold'>SHOPPER</p>
            </div>
            <ul className='flex flex-col sm:flex-row list-none gap-[50px] text-[#252525] text-[20px]'>
                {items.map((item, index) => {
                    return <li className='cursor-pointer' key={index}><Link to={item.path}>{item.name}</Link></li>
                })}
            </ul>
            <div className='flex gap-[20px]'>
                <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                    <img src={instagram_icon} alt='' />
                </div>
                <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                    <img src={pintester_icon} alt='' />
                </div>
                <div className='p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]'>
                    <img src={whatsapp_icon} alt='' />
                </div>
            </div>
            <div className='flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]'>
                <hr className='w-4/5 border-none rounded-[10px] h-[3px] bg-[#c7c7c7]' />
                <p className='text-center'>Copyright @ 2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer