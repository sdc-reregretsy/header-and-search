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
      // <div>
      //   <Departments departments={navCats.departments} />
      // </div>
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
              <Button variant="outline-secondary">Button</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <Nav className="justify-content-end" style={{width:"50%"}}>
          <Nav.Link>Sell on Etsy</Nav.Link>
          <Nav.Link>Register</Nav.Link>
          <Button variant="outline-success">Sign In</Button>

        </Nav>

      </Navbar>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('header'));