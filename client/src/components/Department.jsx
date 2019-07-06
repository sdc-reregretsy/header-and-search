import React from 'react';
import Categories from './Categories.jsx';

const Department = (props) => {
  const {department} = props;
  console.log(department);

  return (
    < >
      <h1>{department.name}</h1>
      {department.categories.map(categories => {
        return(<Categories categories={categories} />)
      })}
    </>
  )
}

export default Department;