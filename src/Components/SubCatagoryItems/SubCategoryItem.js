import React from 'react'
import './SubCategoryItem.css'
import {widgetsToShow}  from '../../Data/data'
import SubCategoryItemCard from './SubCategoryItemCard/SubCategoryItemCard'
import { useParams } from 'react-router-dom'

const SubCategoryItem = () => {

    const params = useParams()
    const SubcategotyItems = widgetsToShow[0].widgetMappings
    const filteredSubCategory = SubcategotyItems.filter((eachItem) => eachItem.category_details.cat_name == params.name)
    console.log(filteredSubCategory[0].category_details)
  
    const sub_categories = filteredSubCategory[0].category_details.sub_categories
  return (
    <div className='sub-cat-items-con'>
        {
              sub_categories.map((each_sub_cat)=>
               <SubCategoryItemCard cat_item = {each_sub_cat}/>
              )
            }
    </div>
  )
}

export default SubCategoryItem
