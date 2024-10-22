import React, { useEffect, useState, useContext } from 'react'
import NavItem from './NavItem'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext/ShopContext'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {

    const { getTotalCartItems } = useContext(ShopContext)

    const navItems = [{ name: 'Shop', path: '/' }, { name: 'Men', path: '/men' }, { name: 'Women', path: '/women' }, { name: 'Kids', path: '/kids' }]
    const location = useLocation();
    const [currentItem, setCurrentItem] = useState('')

    useEffect(() => {
        const address = location.pathname.split('/');
        if (address[1] === '') {
            setCurrentItem('Shop')
            console.log('yes');
        } else {
            for (const item of navItems) {
                if (item.name.toLowerCase() === address[1]) {
                    setCurrentItem(item.name)
                    break;
                }
            }
        }
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    return (
        <div className='flex lg:justify-around justify-between p-[16px] shadow-[0_1px_3px_-2px_black]'>
            <div className='flex items-center gap-[10px]'>
                <img src={logo} alt='' />
                <p className='text-[#171717] text-[38px] font-semibold'>SHOPPER</p>
            </div>
            <div className='flex-1 justify-around hidden lg:flex'>
                <ul className='flex list-none item-center gap-[50px] text-[#626262] text-[20px]'>
                    {navItems.map((item, index) => {
                        return <NavItem key={index} className={`flex flex-col items-center justify-center gap-[3px] cursor-pointer px-4 transition-all duration-100 ${currentItem === item.name && "translate-y-[-8px] after:block after:w-[80%] after:h-[2px] after:bg-red-500 rounded-[10px]"}`} setState={setCurrentItem} path={item.path} >{item.name}</NavItem>
                    })}
                </ul>
                <div className='flex items-center gap-[45px]'>
                    <Link to='/login'><button onClick={() => setCurrentItem('login')} className='w-[157px] h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white active:bg-[#f3f3f3]'>Login</button></Link>
                    <Link to='/cart' onClick={() => setCurrentItem('cart')}><img src={cart_icon} alt='' /></Link>
                    <div className='w-[22px] h-[22px] flex justify-center items-center mt-[-35px] ml-[-55px] rounded-[11px] text-[14px] bg-red-500 text-white'>{getTotalCartItems()}</div>
                </div>
            </div>
            <Sidebar className={'flex justify-center items-center lg:hidden'}>
                <ul className='flex flex-col list-none item-center gap-[50px] text-[#626262] text-[20px]'>
                    {navItems.map((item, index) => {
                        return <NavItem key={index} className={`flex flex-col items-center justify-center gap-[3px] cursor-pointer px-4 transition-all duration-100 ${currentItem === item.name && "translate-y-[-8px] after:translate-y-[15px] after:block after:w-full after:h-[2px] after:bg-red-500 rounded-[10px]"}`} setState={setCurrentItem} path={item.path} >{item.name}</NavItem>
                    })}
                </ul>
                <div className='flex justify-around items-center gap-[45px] mt-[50px]'>
                    <Link to='/login'><button onClick={() => setCurrentItem('login')} className='w-[157px] h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-[#515151] text-[20px] font-medium bg-white active:bg-[#f3f3f3]'>Login</button></Link>
                    <div className='flex'>
                        <Link to='/cart' onClick={() => setCurrentItem('cart')}><img src={cart_icon} alt='' /></Link>
                        <div className='w-[22px] h-[22px] flex justify-center items-center rounded-[11px] text-[14px] bg-red-500 text-white'>{getTotalCartItems()}</div>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}

export default Navbar