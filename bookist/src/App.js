import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import Shelf from './components/Shelf';
import data from './data';


class App extends Component{
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: []
    }



  }

  addToShelf(title){
      this.setState({shelf: [...this.shelf, title]});
  }



  render(){
    //console.log(data);
    return(
      <div>
        <header>
          <Header />
        </header>
        <div className="bookDisplay">
          <BookList books = {this.state.books}/>
        </div>
        <Shelf />
        
      </div>
    );
  }
}

export default App;
