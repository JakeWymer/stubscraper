import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

class Header extends Component {
  render() {
    return(
      <div>
        <Navbar color="#fa9200" light expand="md">
          <NavbarBrand href="/">StubScraper</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
