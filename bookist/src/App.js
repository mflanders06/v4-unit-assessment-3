import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Header />
      </div>
      
    );
  }
}

export default App;
