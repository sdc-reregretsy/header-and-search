import React from 'react';
import ReactDOM from 'react-dom';
import navCats from '../../navCats.json'
import Departments from './components/Departments.jsx'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    console.log(navCats)
    return (
      <>
        <Navbar bg="light" expand="sm" className="align-items-center">
          <Navbar.Brand href="#home">RegrEtsy</Navbar.Brand>
          <Form inline>
            <InputGroup >
              <FormControl
                placeholder="Search for items or shops"
                aria-label="Search for items or shops"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                {/* &#x1F50E; is another magnifying glass option*/}
                <Button variant="outline-secondary">&#8981;</Button>

              </InputGroup.Append>
            </InputGroup>
          </Form>
          <Nav className="justify-content-end" style={{ width: "50%" }}>
            <Nav.Link>Sell on Etsy</Nav.Link>
            <Nav.Link>Register</Nav.Link>
            <Button variant="outline-success">Sign In</Button>
          </Nav>
        </Navbar>
        <Navbar bg="light">
          <Departments departments={navCats.departments} />
        </Navbar>
      </>
      // <div>
      //   <Departments departments={navCats.departments} />
      // </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('header'));