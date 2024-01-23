import React from 'react'
import './Cards.css'
import ProductCard from '../ProductCard/ProductCard'
const Cards = () => {
  return (
    <div className='Cards'>
        <ProductCard backGroundImage={'../img/product/bag.jpg'}/>
    </div>
  )
}

export default Cards