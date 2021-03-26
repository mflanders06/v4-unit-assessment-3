import React, {Component} from 'react';

class BookList extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const mappedBooks = this.props.books.map(( val ) => (
            <div className="bookDiv" key={val.id}>
                <img className="bookCover" src={val.img} alt="Cover"></img>
                <div className="titleAuthor" >{val.title} by {val.author}</div>
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