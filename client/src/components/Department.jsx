import React from 'react';
import Category from './Category.jsx';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { DropdownButton } from 'react-bootstrap';

const Department = (props) => {
  const { department } = props;
  console.log(department);

  return (
    < >
      {/* <h1>{department.name}</h1>
      {department.categories.map(category => {
        return(<Category category={category} />)
      })} */}
      <DropdownButton title={`${department.name}`}>
        {department.categories.map(category => {
          return (<Category category={category} />)
        })}
      </DropdownButton>
    </>
  )
}

export default Department;