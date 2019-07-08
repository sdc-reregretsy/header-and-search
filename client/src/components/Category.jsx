import React from 'react';
import SubCategory from './SubCategory.jsx'
import {Dropdown} from 'react-bootstrap';


class Category extends React.Component {

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

    const { category } = this.props;
    // console.log(category)
    return (
      < >
        {/* <h3>{category.name}</h3>
      {category.subcategories.map(subCategory => {
        return (
          <SubCategory subCategory={subCategory} />
          )
        })} */}
        <Dropdown drop="right"
          onMouseOver={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          show={this.state.dropdownOpen}
          onToggle={this.toggle}
        >
          <Dropdown.Toggle className="custom-drop">
            {`${category.name}`}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {category.subcategories.map((subCategory, i) => {
              return (
                <SubCategory subCategory={subCategory} key={`subCategory:${i}`} />
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </>
    )
  }
}

export default Category;