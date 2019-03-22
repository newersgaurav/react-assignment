import React, { Component } from 'react';

import './main.css';

class Main extends Component {

	

  	render() {

    return (
      <div className="main">
      	<button onClick={this.props.fn}>Click Me To Increase The Count</button>
      </div>
    );
  }
}

export default Main;