import React from 'react';
import Department from './Department.jsx';

const Departments = (props) => {
  const {departments} = props;
  return (
    < >
      {departments.map((department, i) => {
        return(<Department department={department} key={`Department${i}`}/>)
      })}
    </>
  )
}

export default Departments;