import React from 'react';

const SubCategory = (props) => {
  const {category} = props;
  console.log(category)
  return (
    <div>{category.name}</div>
  )
}

export default SubCategory;