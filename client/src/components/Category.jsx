import React from 'react';
import SubCategory from './SubCategory.jsx'

const Category = (props) => {
  const {category} = props;
  console.log(category)
  return (
    < >
      <h3>{category.name}</h3>
      {category.subcategories.map(subCategory => {
        return (
          <SubCategory subCategory={subCategory} />
        )
      })}
    </>
  )
}

export default Category;