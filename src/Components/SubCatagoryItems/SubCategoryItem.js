import React from 'react'
import './SubCategoryItem.css'
import {widgetsToShow}  from '../../Data/data'
import SubCategoryItemCard from './SubCategoryItemCard/SubCategoryItemCard'
import { useParams } from 'react-router-dom'
import {productsList} from '../../Data/data'

const SubCategoryItem = () => {

    const params = useParams()
    const filteredSubCategory = productsList.filter((eachItem) => eachItem.cat_name == params.name.trim() )
    console.log(filteredSubCategory.length)
  
    const sub_categories = filteredSubCategory[0]?.subProductList
  
  return (
    <div className='sub-cat-items-con'>
        {
                filteredSubCategory.length == 0 ? <h1 className='error-message'>No Items Found</h1> :  sub_categories.map((each_sub_cat)=>
                  <SubCategoryItemCard key = {each_sub_cat.variantId} cat_item = {each_sub_cat}/>
             
             
              )
            }
    </div>
  )
}

export default SubCategoryItem
