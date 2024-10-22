import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext)

    return (
        <div className='my-[100px] mx-[10px] lg:mx-[170px]'>
            <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] text-[#454545] text-[18px] font-semibold overflow-auto'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-[3px] bg-[#e2e2e2] border-0' />
            {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div className='overflow-auto'>
                            <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] text-[#454545] text-[17px] font-medium'>
                                <img className='min-w-[100px] min-h-[62px] object-cover' src={item.image} alt='' />
                                <p>{item.name}</p>
                                <p>${item.new_price}</p>
                                <button className='w-[64px] h-[50px] border-2 border-[#ebebeb] bg-[#fff]'>{cartItems[item.id]}</button>
                                <p>${cartItems[item.id] * item.new_price}</p>
                                <img className='cursor-pointer w-[15px] mx-[40px]' src={remove_icon} onClick={() => removeFromCart(item.id)} alt='' />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className='flex flex-col xl:flex-row my-[100px] mx-[50px]'>
                <div className='flex-1 flex flex-col xl:mr-[200px] gap-[40px] order-2 xl:order-1 mt-[70px] xl:mt-0'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='flex justify-between py-[15px]'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-[15px]'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between py-[15px]'>
                            <h3 className='font-bold'>Total</h3>
                            <h3 className='font-bold'>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='w-full h-[58px] outline-none border-0 bg-[#ff5a5a] text-[#fff] text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='flex-1 text-[16px] font-normal order-1 xl:order-2'>
                    <p className='text-[#555]'>IF you have a promo code, Enter it here</p>
                    <div className='flex flex-wrap w-full mt-[15px] h-[58px] bg-[#eaeaea]'>
                        <input className='pl-[20px] mr-[10px] border-0 mt-[5px] outline-none bg-transparent text-[16px] w-[330px] h-[50px]' placeholder='Promo code' />
                        <button className='flex-1 h-[58px] text-[16px] bg-black text-white cursor-pointer'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems