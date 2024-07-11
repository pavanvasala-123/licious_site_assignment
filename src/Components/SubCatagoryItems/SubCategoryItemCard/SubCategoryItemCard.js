import React from 'react'
import './SubCategoryItemCard.css'

const SubCategoryItemCard = ({cat_item}) => {
    const {cat_img,cat_name} = cat_item
  return (
    
    <div className='sub-category-item-card'>
      <div className='sub-cat-image-con'>
        <img src={cat_img} alt={cat_name}/>
      </div>
      <div className='sub-cat-item-info-con'>
        <h5>{cat_name}</h5>
        <div className='weight-con'>
          <span className='netweight'>500 g  |</span>
          <span>10-12 Pices |</span>
          <span>Serves 4</span>
        </div>
        <div className='price-con'>
          <span className='discounted-price'>193</span>
          <span className='base-price'>₹289</span>
          <span className='discountPercentage'>9% off</span>
        </div>
        <div className='button-con'>
          <p>Tomarrow 6am - 8am</p>
          <button>Add +</button>
        </div>
      </div>
    </div>
  )
}

export default SubCategoryItemCard
