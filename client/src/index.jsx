import React from 'react';
import ReactDOM from 'react-dom';
import navCats from '../../navCats.json'
import Departments from './components/Departments.jsx'
import { Navbar, Nav, Form, Button, InputGroup, Image, Badge } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';
// import config from '../../config.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      allTitles: [],
      idDict: {},
      cartItems: 0
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchReturn = this.handleSearchReturn.bind(this);
    this.bc = new BroadcastChannel('regretfully');
    this.cartBC = new BroadcastChannel('added');
  }

  componentDidMount() {
    console.log('Searching for db items at:')
    axios.get(`/search`)
      .then((result) => {
        console.log('DB returned', result.data)
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

  handleSearchReturn(e) {
    if (e.key === 'Enter') {
      this.handleSearchSubmit();
    }
  }

  handleItems(items) {
    const titleArr = [];
    const titleDict = {};
    for (let element of items) {
      titleDict[element.product_name] = element.id;
      titleArr.push(element.product_name);
    }
    this.setState({ allTitles: titleArr, idDict: titleDict });
  }

  addToCart() {
    this.setState({ cartItems: this.state.cartItems + 1 })
  }


  render() {

    this.bc.onmessage = function (ev) {
      console.log(ev.data)
    }

    this.cartBC.onmessage = (ev) => {
      this.addToCart();
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
                onKeyDown={(event) => { this.handleSearchReturn(event) }}
                selectHintOnEnter={true}
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
            <Nav.Link className="navLink" onClick={() => { alert('Under Construction: Come Back Later') }}>Sell on RegrEtsy</Nav.Link>
            <Nav.Link className="navLink" onClick={() => { alert('Sorry, Registration is Down') }}>Register</Nav.Link>
            <Button variant="outline-success" onClick={() => { alert('Sorry, Sign-In is down') }}>Sign In</Button>
            <Nav.Link className="cart-container">
              <Image src="https://image.flaticon.com/icons/png/512/34/34627.png" id="cart" fluid
                style={{ height: "20%", width: "20%", padding: "2px", "minWidth": "50px", "minHeight": "50px" }}></Image>
              {this.state.cartItems > 0 ? <Badge variant="light">{this.state.cartItems}</Badge> : <></>}
            </Nav.Link>
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