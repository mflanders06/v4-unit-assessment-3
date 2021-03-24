import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import Shelf from './components/Shelf';


class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <header>
          <Header />
        </header>
        <BookList />
        <Shelf />
        
      </div>
    );
  }
}

export default App;
