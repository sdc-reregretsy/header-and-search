import React from 'react';
import SubCategory from './SubCategory.jsx'

const Categories = (props) => {
  const {categories} = props;
  console.log(categories)
  return (
    < >
      <h3>{categories.name}</h3>
      {categories.subcategories.map(category => {
        return (
          <SubCategory category={category} />
        )
      })}
    </>
  )
}

export default Categories;