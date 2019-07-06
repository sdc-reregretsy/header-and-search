import React from 'react';
import Category from './Category.jsx';

const Department = (props) => {
  const {department} = props;
  console.log(department);

  return (
    < >
      <h1>{department.name}</h1>
      {department.categories.map(category => {
        return(<Category category={category} />)
      })}
    </>
  )
}

export default Department;