import React, { Component } from 'react';
import Book from '../representational/Book';

class BookList extends Component{
    constructor(props) {
        super(props);
        console.log("BookList constructor");
    }


      
        componentDidMount() {
          console.log("BookList componentDidMount!")
        }

        shouldComponentUpdate(nextProps, nextState) {
          console.log("U BookList shouldComponentUpdate", nextProps, nextState);
          return true;
        }


        componentDidUpdate() {
          console.log("U BookList componentDidUpdate");
        }


        static getDerivedStateFromProps(nextProps, prevState) {
          console.log("MainComponent getDerivedStateFromProps", nextProps, prevState);
          return prevState;
        }

        getSnapshotBeforeUpdate() {
          console.log("U BookList getSnapshotBeforeUpdate")
        }

    render() {
        console.log("BookList render")
        return (
            this.props.books.map((book, index) => {
                return (
                  <Book 
                  bookName={book.bookName}
                  writer={book.writer}
                  delete={() => this.props.deleteBookState(index)}
                  key={book.id}
                  inputName= {event => this.props.changeWithInputState(event, index)}
                  // inputName={(event) => this.props.changeWithInputState(event, index)}
                  />
                );
            })
    
    
        );
    }
    
}

export default BookList;