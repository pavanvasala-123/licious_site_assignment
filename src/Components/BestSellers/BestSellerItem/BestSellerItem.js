import React from 'react'
import './BestSellerItem.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { addItem, decreaseQuantity } from '../../../AppStore/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


const BestSellerItem = ({item}) => {
  const {merchandiseName,media,weightAndPieces,basePrice,discountedPrice,baseDiscount,variantId} = item
  
  const dispatch = useDispatch()
    const handleCart = (variantId) =>{
      // console.log(item)
      dispatch(addItem({id:variantId,basePrice:basePrice,merchandiseName:merchandiseName,discountedPrice:discountedPrice ,weightAndPieces:weightAndPieces}))
    }

    const cartItems = useSelector((state)=> state.cart.cart_products)

  
  return (
    <div className='best-seller-item-con'>
      <div className='image-con'>
        <img src={media.prImage} alt=''/>
        <button onClick={()=>handleCart(variantId)}>+</button>
      </div>
      <div className='item-info-con'>
        <h5>{merchandiseName}</h5>
        <div className='weight-con'>
          <span className='netweight'>{weightAndPieces.netWeight} g |</span>
          <span>{weightAndPieces.pieces} Pices |</span>
          <span>Serves {weightAndPieces.serves}</span>
        </div>
        <div className='price-con'>
          <p className='discounted-price'>₹{discountedPrice}</p>
          <span className='base-price'>₹{basePrice}</span>
          <span className='discountPercentage'>{baseDiscount}% off</span>
        </div>
      </div>
    </div>
  )
}

export default BestSellerItem
