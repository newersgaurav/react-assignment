import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/main';
import Footer from './component/footer';
import Aside from './component/aside';

class App extends Component {

  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }

  counting = () => {
    this.setState(
        {
          counter: ++this.state.counter
        }
      )
  }

  

  render() {
    
    return (
      <div className="App">
        <Header c = {this.state.counter}/>
        <div className="section">
          <Main fn = {this.counting}/>
          <Aside/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
