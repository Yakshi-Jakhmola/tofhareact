import React from 'react'
import './ProductCard.css'
const ProductCard = ({backGroundImage , downloadLogo , TagName}) => {
  return (
    <div className='ProductCard'>
        <img src={backGroundImage}/>
        
    </div>
  )
}

export default ProductCard