import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import ShopCategories from '../ShopCatrgories/ShopCategories'
import Bestsellers from '../BestSellers/Bestsellers'
import CustomerReviews from '../CustomerReviews/CustomerReviews'


const Home = () => {
  return (
    <div className='home'>
      <Banner/>
      <ShopCategories/>
      <Bestsellers/>
      <CustomerReviews/>
     
    </div>
  )
}

export default Home
