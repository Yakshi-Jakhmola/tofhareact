import React from 'react'
import './Cards.css'
import ProductCard from '../ProductCard/ProductCard'
const Cards = () => {
  return (
    <div className='Cards section'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-4 mb-3'>
                  <ProductCard backGroundImage={'../img/product/bag.jpg'} TagName={
                    'Bag' 
                  }/>
              </div>
              <div className='col-lg-3 col-md-4 mb-3'>
                <ProductCard backGroundImage={'../img/product/bottle.webp'} TagName={
                  'Bottle' 
                }/>
              </div>
                        <div className='col-lg-3 col-md-4 mb-3'>
                          <ProductCard backGroundImage={'../img/product/diary.webp'} TagName={
                            'Diary' 
                          }/>
                      </div>
                        <div className='col-lg-3 col-md-4 mb-3'>
                          <ProductCard backGroundImage={'../img/product/giftset.webp'} TagName={
                            'Giftset' 
                          }/>
                      </div>
                      <div className='col-lg-3 col-md-4 mb-3'>
                        <ProductCard backGroundImage={'../img/product/lunchbox.webp'} TagName={
                          'Lunchbox' 
                        }/>
                    </div>
                    <div className='col-lg-3 col-md-4 mb-3'>
                      <ProductCard backGroundImage={'../img/product/pen.webp'} TagName={
                        'Pen' 
                      }/>
                  </div>
                  <div className='col-lg-3 col-md-4 mb-3'>
                    <ProductCard backGroundImage={'../img/product/quickdispatch.webp'} TagName={
                      'Quickdispatch' 
                    }/>
                </div>
                <div className='col-lg-3 col-md-4 mb-3'>
                    <ProductCard backGroundImage={'../img/product/techgadget.webp'} TagName={
                      'Techgadget' 
                    }/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards