import React from 'react';
import ReactDOM from 'react-dom';
import navCats from '../../navCats.json'
import Departments from './components/Departments.jsx'
import { Navbar, Nav, Form, Button, InputGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';
import config from '../../config.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      allTitles: [],
      idDict: {}
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.bc = new BroadcastChannel('regretfully');
  }

  componentDidMount() {
    console.log('Searching for db items at:', config.URL)
    axios.get(`${config.URL}/search`)
      .then((result) => {
        // console.log(result.data);
        this.handleItems(result.data);
      })
      .catch((err) => {
        console.log('Error loading items on mount')
      })
  }

  // NOTE: Typeahead change handler works differently than a normal input field
  handleSearchChange(selected) {
    console.log(selected[0]);
    console.log('Change Handler entered')
    this.setState({ searchTerm: selected[0] })
  }

  //On submit need to lookup the listing_id of the selected term and pass it to other microservices
  handleSearchSubmit() {
    let listing_id = this.state.idDict[this.state.searchTerm]
    if (listing_id === undefined) {
      return alert('Please pick an option from the search bar')
    }
    console.log(`Search Term: ${this.state.searchTerm} \nReferences id: ${listing_id}`)
    this.bc.postMessage(listing_id);
    this.typeahead.getInstance().clear()
    this.setState({ searchTerm: '' });
  }

  handleItems(items) {
    const titleArr = [];
    const titleDict = {};
    for (let element of items) {
      titleDict[element.title] = element.listing_id;
      titleArr.push(element.title);
    }
    // console.log(titleArr);
    // console.log(titleDict);
    this.setState({ allTitles: titleArr, idDict: titleDict });
  }


  render() {
    // console.log(navCats)
    // console.log(this.bc)

    this.bc.onmessage = function (ev) {
      console.log(ev.data)
    }

    return (
      <>
        <Navbar expand="sm" className="align-items-center">
          <Navbar.Brand href="#home" id="logo">RegrEtsy</Navbar.Brand>
          <Form inline>
            <InputGroup id="navbarSearch" className="regretsy-search">
              <Typeahead
                placeholder="Search for items or shops"
                aria-label="Search for items or shops"
                aria-describedby="basic-addon2"
                labelKey="name"
                options={this.state.allTitles}
                onChange={(selected) => { this.handleSearchChange(selected) }}
                id="typeahead-search"
                ref={(typeahead) => this.typeahead = typeahead}
              />
              <InputGroup.Append>
                {/* &#x1F50E; is another magnifying glass option*/}
                <Button variant="outline-secondary"
                  className="searchBtn"
                  onClick={() => { this.handleSearchSubmit() }}
                >
                  &#8981;
                  </Button>

              </InputGroup.Append>
            </InputGroup>
          </Form>
          <Nav className="justify-content-end" style={{ width: "50%" }}>
            <Nav.Link className="navLink" onClick={() => { alert('Under Construction: Come Back Later') }}>Sell on Etsy</Nav.Link>
            <Nav.Link className="navLink" onClick={() => { alert('Sorry, Registration is Down') }}>Register</Nav.Link>
            <Button variant="outline-success" onClick={() => { alert('Sorry, Sign-In is down') }}>Sign In</Button>
          </Nav>
        </Navbar>
        <Navbar expand="lg">
          <Departments departments={navCats.departments} />
        </Navbar>
        <hr></hr>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('navpane'));