import React from 'react';
import ReactDOM from 'react-dom';
import navCats from '../../navCats.json'
import Departments from './components/Departments.jsx'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  
  render() {
    console.log(navCats)
    return (
      <div>
        <Departments departments={navCats.departments} />
      </div>
    )
  }
}

ReactDOM.render(<Navbar />, document.getElementById('header'));