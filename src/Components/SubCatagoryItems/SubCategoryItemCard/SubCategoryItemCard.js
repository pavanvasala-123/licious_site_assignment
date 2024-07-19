import React from 'react'
import './SubCategoryItemCard.css'
import { addItem } from '../../../AppStore/cartSlice'
import { useDispatch } from 'react-redux'

const SubCategoryItemCard = ({cat_item}) => {
   
  const {merchandiseName,weightAndPieces,basePrice,discountedPrice,variantId} = cat_item

    const dispatch = useDispatch()
    const handleCart = (variantId) =>{
      // console.log(item)
      dispatch(addItem({id:variantId,basePrice:basePrice,merchandiseName:merchandiseName,discountedPrice:discountedPrice ,weightAndPieces:weightAndPieces}))
    }
  return (
    
    <div className='sub-category-item-card' key={cat_item.variantId}>
      <div className='sub-cat-image-con'>
        <img src={cat_item.media.prImage} alt={cat_item.cat_name}/>
      </div>
      <div className='sub-cat-item-info-con'>
        <h5>{cat_item.merchandiseName}</h5>
        <div className='weight-con'>
          <span className='netweight'>500 g  |</span>
          <span>10-12 Pices |</span>
          <span>Serves 4</span>
        </div>
        <div className='price-con'>
          <span className='discounted-price'>{cat_item.basePrice}</span>
          <span className='base-price'>₹289</span>
          <span className='discountPercentage'>{cat_item.discountPercentage}% off</span>
        </div>
        <div className='button-con'>
          <p>Tomarrow 6am - 8am</p>
          <button onClick={()=>handleCart(cat_item.variantId)}>Add +</button>
        </div>
      </div>
    </div>
  )
}

export default SubCategoryItemCard
