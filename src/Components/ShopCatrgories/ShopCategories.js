import React from 'react'
import {widgetsToShow}  from '../../Data/data'
import './ShopCategories.css'
import CategotyItem from './CategoryItem/CategotyItem'

const ShopCategories = () => {
    const categotyItems = widgetsToShow[0].widgetMappings
  return (
    <section className='shop-by-categories-con'>
      <div className='heading-container'>
            <h3>Shop by Categories</h3>
            <p>Fresh meat and much more!</p>
      </div>
      <div className='item-con'>
            {categotyItems.map((eachItem)=>
            // console.log(eachItem.category_details.cat_name)
            <CategotyItem key ={eachItem.category_details.id} item = {eachItem.category_details} />
            )}
      </div>
    </section>
  )
}

export default ShopCategories
