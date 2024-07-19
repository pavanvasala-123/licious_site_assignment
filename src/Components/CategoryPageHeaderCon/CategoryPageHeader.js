import React from 'react'
import './CategoryPageHeader.css'
import {widgetsToShow}  from '../../Data/data'
import { useParams } from 'react-router-dom'

const CategoryPageHeader = () => {

  const SubcategotyItems = widgetsToShow[0].widgetMappings
  // console.log(SubcategotyItems)
  const params = useParams()
  // console.log(params.name)

  const filteredSubCategory = SubcategotyItems.filter((eachItem) => eachItem.category_details.cat_name == params.name)
  // console.log(filteredSubCategory[0].category_details)

  const sub_categories = filteredSubCategory[0].category_details.sub_categories

  return (
    <div className='categoryPage-header-con'>
      <div className='categoryPage-header-content-con'>
          <h3>{params.name}</h3>
          <img src='https://assets.licious.in/oms/8839eb27-ddc1-bdd7-2f01-eff5a3ee1eb5/original/1716532118557.png' alt='chickenImage'/>
          <div className='sub-categories-con'>
            {
              sub_categories.map((each_sub_cat)=>
                <>
                    <div className='sub-cat-item' key={each_sub_cat.cat_name}>
                        <img src={each_sub_cat.cat_img} alt={each_sub_cat.cat_name}/>
                        <p>{each_sub_cat.subtitle}</p>
                    </div>
                </>
              )
            }

          </div>
      </div>
    </div>
  )
}

export default CategoryPageHeader
