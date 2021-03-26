import React, {Component} from 'react';

class BookList extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const mappedBooks = this.props.books.map(( val ) => (
            <div key={val.id}>
                <h4 >{val.title}</h4>
                <h4 >{val.author}</h4>
                <img  src={val.img} alt="Cover"></img>
            </div>
        )
        )
        console.log(mappedBooks);
        return(
            <div>
                {mappedBooks}
            </div>
        );
    }
}
export default BookList;