import React, { Component } from 'react';
import booklist from '../assets/books.js'
import BookList from './lists/BookList';



class MainComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      books : booklist,
      showBooks: true
    }
    console.log("MainComponent constructor!");
  }
    

  


  changeBookState = (event, index) => {
    const book = {
      ...this.state.books[index]
    }

    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;

    this.setState({ books: books });
}

deleteBookState = index => {
  //const books = this.state.books.splice();
  //const books = this.state.books.map(item => item);
  const books = [...this.state.books]
  books.splice(index, 1);
  this.setState({
    books: books
  });
};

toggleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks });
}

componentDidMount() {
  console.log("MainComponent componentDidMount")
}





  // changeWithInputState = event => {
  //   this.setState({
  //     books : [
  //       { bookName: event.target.value, writer: "Georage Orwell"},
  //       { bookName: "The Da Vinci Code", writer: "Dan Brown"},
  //       { bookName:"Metamorphosis", writer: "Franz Kafka" }
  //     ]
  //   });
  // }
shouldComponentUpdate(nextProps, nextState) {
  console.log("U MainComponent shouldComponentUpdate", nextProps, nextState);
  return true;
}



componentDidUpdate() {
  console.log("U MainComponent componentDidUpdate!")
}

static getDerivedStateFromProps(nextProps, prevState) {
  console.log("BookList getDerivedStateFromProps", nextProps, prevState);
  return prevState;
}

  render() {
    console.log("MainComponent render")
    const style = {
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor: "black",
      color: "white"
    };

    //const booksState = this.state.books;

    let books = null;
    if (this.state.showBooks){
      books = <BookList 
      books={this.state.books} 
      deleteBookState={this.deleteBookState}
      changeWithInputState={this.changeWithInputState}
      />
    }

    //console.log(booksState);
    console.log(books);

    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        {books}
      </div>
    );
  }
}

export default MainComponent;