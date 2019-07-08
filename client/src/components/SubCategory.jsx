import React from 'react';
import {Dropdown} from 'react-bootstrap';

const SubCategory = (props) => {
  const {subCategory} = props;
  // console.log(subCategory)
  return (
    <Dropdown.Item>{subCategory.name}</Dropdown.Item>
  )
}

export default SubCategory;