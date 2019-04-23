import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './BookSearch.js'
import BooksList from './BooksList.js'


class BooksApp extends React.Component {
  state = {
      books:[],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  }
  componentDidMount() {
  BooksAPI.getAll().then((books) => (
    this.setState({ books })
                        
                         
  ))
}

 shelfChange=(bookMoved,targetShelf)=>{ 
      BooksAPI.update(bookMoved, targetShelf).then(() => {
      bookMoved.shelf = targetShelf;
      let newBookList= this.state.books.filter((b) => (
      b.id !== bookMoved.id));
      newBookList.push(bookMoved);
      this.setState({ books: newBookList });
    });
  }
  render() {
    return (
      <div className="app">
    <Route
          path='/'
          exact
          render={() => (
          <BooksList shelfchange={this.shelfChange}
            books={this.state.books}
             
            />
           
          )}
        />
        <Route
          path='/search'
          exact
          render={() => (
            <BookSearch shelfchange={this.shelfChange} books={this.state.books}/> 
          )}
        />
        
        
        
        
      </div>);
}
                                                          
                                                          }
export default BooksApp;
