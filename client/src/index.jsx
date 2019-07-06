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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    console.log(navCats)
    console.log(Navbar)
    return (
      // <div>
      //   <Departments departments={navCats.departments} />
      // </div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Regretsy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('header'));