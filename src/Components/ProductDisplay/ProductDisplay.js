import React, { useContext } from 'react'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from '../Assets/star_dull_icon.png'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext/ShopContext'

const ProductDisplay = ({ id, name, images, old_price, new_price, category }) => {

    const { addToCart } = useContext(ShopContext)
    console.log(id);

    return (
        <div className='flex flex-col xl:flex-row mx-[10px] md:mx-[70px] lg:mx-[170px]'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img className='object-cover' src={images} alt='' />
                    <img className='object-cover' src={images} alt='' />
                    <img className='object-cover' src={images} alt='' />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img object-cover' src={images} alt='' />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1 className='text-[25px] md:text-[32px] xl:text-[40px]'>{name}</h1>
                <div className='productdisplay-right-stars'>
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-price-old'>${old_price}</div>
                    <div className='productdisplay-price-new'>${new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    description
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-size flex flex-col md:flex-row'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(id)}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category : {category}</span></p>
                <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay