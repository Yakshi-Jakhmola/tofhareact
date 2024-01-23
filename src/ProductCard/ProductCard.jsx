import React from 'react'
import './ProductCard.css'
const ProductCard = ({backGroundImage , downloadLogo , TagName}) => {
  return (
    <div className='ProductCard'>
        <div className='productimage'>
            <img src={backGroundImage}/>
        </div>
        <div className='productbottom'>
          <div className='productname'>
            <h6>{TagName}</h6>
          </div>
          <div className='producticon'>
              <i class="fa-solid fa-download"></i>
          </div>
        </div>
    </div>
  )
}

export default ProductCard