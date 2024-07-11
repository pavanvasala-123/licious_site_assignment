import React from 'react'
import './CustomerReviews.css'
import { widgetsToShow } from '../../Data/data'
import CustomerReviewCard from './CustomerReviewCard/CustomerReviewCard'

const CustomerReviews = () => {
    const customerReviews = widgetsToShow[2].widgetMappings
    // console.log(customerReviews)
  return (
    <div>
      <div className='customer-review-con'>
      <div className='heading-container'>
        <h3>What our customers say</h3>
        <p>Hear it directly from people like you</p>
      </div>
      <div className='customer-reviews-cards-con'> 
      {customerReviews.map((eachItem)=>
            // console.log(eachItem)
            <CustomerReviewCard key ={eachItem.integerId} reviewCard = {eachItem} />
            )}
      </div>
    </div>
    </div>
  )
}

export default CustomerReviews
