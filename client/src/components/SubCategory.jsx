import React from 'react';
import { Dropdown } from 'react-bootstrap';

const SubCategory = (props) => {
  const { subCategory } = props;
  console.log(subCategory)
  return (
    <>
      {subCategory.bold === true ?
        <Dropdown.Item style={{ "font-weight": "bold" }}>{subCategory.name}</Dropdown.Item> :
        <Dropdown.Item>{subCategory.name}</Dropdown.Item>}
    </>
  )
}

export default SubCategory;