import React, { Component } from 'react';

import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
      	  COUNT is {this.props.c}
      </header>
    );
  }
}

export default Header;
