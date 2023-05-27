import React from 'react'

const ProductInfo = () => {
  return (
    <div className='product'>
        <div className="product__seller">Sneaker Company</div>
        <div className="product__name">Fall Limited Edition Sneakers</div>
        <div className="product__description"> These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</div>
        <div className="product__pricing">
            <div className="price">
                <div className="price__current">$125.00</div>
                <div className="price__discount">50%</div>
                <div className="price__old">$250.00</div>
            </div>
        </div>
        <div className="product__counter"></div>
        <div className="product__button"></div>
    </div>
  )
}

export default ProductInfo