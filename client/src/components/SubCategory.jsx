import React from 'react';

const SubCategory = (props) => {
  const {subCategory} = props;
  // console.log(subCategory)
  return (
    <div>{subCategory.name}</div>
  )
}

export default SubCategory;