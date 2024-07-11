import React from 'react'
import './CustomerReviewCard.css'

const CustomerReviewCard = ({reviewCard}) => {
    // const {appImage} = reviewCard
  return (
    // <div className='review-card-con'>
    //   <img src={reviewCard.appImage} alt=''/>
    // </div>
       <img src={reviewCard.appImage} className = "customer-review-card" alt=''/>
  )
}

export default CustomerReviewCard
