import React from 'react'
import './CategoryItem.css'
import { useNavigate } from 'react-router-dom'

const CategotyItem = ({item}) => {
    const {cat_img , cat_name} = item
    const navigate = useNavigate()

    const handleSubCategory = (cat_name)=>{
      // console.log("sub catagory page")
      navigate(`/Home/subcategory/${cat_name}`)
    }

  return (
    <div className='cat-item' onClick={() =>handleSubCategory(cat_name)}>
      <img src={cat_img} alt={cat_name}/>
      <p>{cat_name}</p>
    </div>
  )
}

export default CategotyItem
