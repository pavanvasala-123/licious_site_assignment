import React from 'react'
import BestSellerItem from './BestSellerItem/BestSellerItem'
import { widgetsToShow } from '../../Data/data'
import './BestSellers.css'

const Bestsellers = () => {
    const bestSellers = widgetsToShow[1].widgetMappings
  return (
    <div className='best-sellers'>
      <div className='heading-container'>
        <h3>BestSellers</h3>
        <p>Fresh meat at extra special prices</p>
      </div>
      <div className='best-seller-items-con'> 
      {bestSellers.map((eachItem)=>
            <BestSellerItem key ={eachItem.productDetails.variantId} item = {eachItem.productDetails} />
            )}
      </div>
    </div>
  )
}

export default Bestsellers
