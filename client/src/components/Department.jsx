import React from 'react';
import Category from './Category.jsx';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown} from 'react-bootstrap';

class Department extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    console.log('Toggled')
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    const { department } = this.props;
    console.log(department);

    return (
      < >
        {/* <h1>{department.name}</h1>
      {department.categories.map(category => {
        return(<Category category={category} />)
      })} */}
        <Dropdown
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          show={this.state.dropdownOpen}
          onToggle={this.toggle}
          >
          <Dropdown.Toggle >
            {`${department.name}`}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {department.categories.map((category, i) => {
              return (<Category category={category} key={`Category${i}`}/>)
            })}
          </Dropdown.Menu>
        </Dropdown>
      </>
    )
  }
}

export default Department;