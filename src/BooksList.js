import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class BooksList extends Component{
    
    render()
    {
        const {books,shelfchange}=this.props;
        let currentBooks = books.filter((book) => (
        book.shelf === 'currentlyReading'
        ));
        let wantToRead = books.filter((book) => (
            book.shelf === 'wantToRead'
        ));
        let finishedBooks = books.filter((book) => (
        book.shelf === 'read'
        ));
    console.log(books)
        return(
           
         <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {currentBooks.map((book) => (
                   <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <img src={(book.imageLinks)?(book.imageLinks.thumbnail):('')} alt="book" className='book-cover'></img>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => (shelfchange(book, event.target.value))} >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                           <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                ))}
                    </ol>
                </div>
                  </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {
                        wantToRead.map((book) => (
                   <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <img src={(book.imageLinks)?(book.imageLinks.thumbnail):('')} alt="book" className='book-cover'></img>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => shelfchange(book, event.target.value)} defaultValue={book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                           <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                        finishedBooks.map((book) => (
                   <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <img src={(book.imageLinks)?(book.imageLinks.thumbnail):('')} alt="book" className='book-cover'></img>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => shelfchange(book, event.target.value)} defaultValue={book.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                           <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        );
    }
            
}

export default BooksList;