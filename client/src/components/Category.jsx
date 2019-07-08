import React from 'react';
import SubCategory from './SubCategory.jsx'
import { DropdownButton } from 'react-bootstrap';


const Category = (props) => {
  const { category } = props;
  console.log(category)
  return (
    < >
      {/* <h3>{category.name}</h3>
      {category.subcategories.map(subCategory => {
        return (
          <SubCategory subCategory={subCategory} />
        )
      })} */}
      <DropdownButton drop="right" title={`${category.name}`}>
        {category.subcategories.map(subCategory => {
          return (
            <SubCategory subCategory={subCategory} />
          )
        })}
      </DropdownButton>

    </>
  )
}

export default Category;