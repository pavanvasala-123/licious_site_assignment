import React from 'react'
import './BestSellerItem.css'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../AppStore/cartSlice'

const BestSellerItem = ({item}) => {
  const {merchandiseName,media,weightAndPieces,basePrice,discountedPrice,baseDiscount,variantId} = item
  
  const dispath = useDispatch()

  const addTocart = () =>{
      console.log(item)
      dispath(addItem(item))
  }
  return (
    <div className='best-seller-item-con'>
      <div className='image-con'>
        <img src={media.prImage} alt=''/>
        <button onClick={()=>addTocart(variantId)}>+</button>
      </div>
      <div className='item-info-con'>
        <h5>{merchandiseName}</h5>
        <div className='weight-con'>
          <span className='netweight'>{weightAndPieces.netWeight} g |</span>
          <span>{weightAndPieces.pieces} Pices |</span>
          <span>Serves {weightAndPieces.serves}</span>
        </div>
        <div className='price-con'>
          <span className='discounted-price'>{discountedPrice}</span>
          <span className='base-price'>₹{basePrice}</span>
          <span className='discountPercentage'>{baseDiscount}% off</span>
        </div>
      </div>
    </div>
  )
}

export default BestSellerItem
