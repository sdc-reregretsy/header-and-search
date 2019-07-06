import React from 'react';
import Department from './Department.jsx';

const Departments = (props) => {
  const {departments} = props;
  console.log(departments);
  return (
    < >
      {departments.map((department) => {
        return(<Department department={department}/>)
      })}
    </>
  )
}

export default Departments;