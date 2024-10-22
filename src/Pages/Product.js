import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext/ShopContext'
import { useParams } from 'react-router';
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {

  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number((productId)))

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay id={product?.id} name={product?.name} category={product?.category} images={product?.image} new_price={product?.new_price} old_price={product?.old_price} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product