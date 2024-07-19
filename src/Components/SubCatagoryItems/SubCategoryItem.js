import React from 'react'
import './SubCategoryItem.css'
import {widgetsToShow}  from '../../Data/data'
import SubCategoryItemCard from './SubCategoryItemCard/SubCategoryItemCard'
import { useParams } from 'react-router-dom'
import {productsList} from '../../Data/data'

const SubCategoryItem = () => {

    const params = useParams()
    console.log(params.name)
    const SubcategotyItems = widgetsToShow[0].widgetMappings
    const filteredSubCategory = productsList.filter((eachItem) => eachItem.cat_name == params.name.trim() )
    // console.log(filteredSubCategory[0].subProductList)
  
    const sub_categories = filteredSubCategory[0].subProductList
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
