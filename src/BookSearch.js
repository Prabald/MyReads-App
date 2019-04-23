import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BookSearch extends Component
{
    state=
    {
        found:[],
        keywords:''    
        
    }
    getBooks=(keywords)=>{
       
        
        console.log(keywords);
         BooksAPI.search(keywords).then((books) => {
         if(Array.isArray(books))
         {
             
             if (!keywords) {
                 console.log('hoii');
          this.clearResults();
        }
            else
            {
                this.setState({ found: books, keywords: keywords.trim() })
            }
        
        }
      }).catch(()=>{this.clearResults()})
    }
    
    reset=()=>{
        console.log('hoii')
        this.setState({ found: [], keywords: '' })
    }    
    findShelf = (books, id) => {
    const book = this.props.books.find((b) => (
      b.id === id
    ))
    return (book && book.shelf) ? (book.shelf) : ('none')
  }
    clearResults=()=>{
        this.setState({found:[],keywords:''})
    }
    render(){
        
        const {found}=this.state;
        
        
     
        
        return(
         <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(event) =>( this.getBooks(event.target.value))}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  
                 
                     {found.map((book) => (
                   <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <img src={(book.imageLinks)?(book.imageLinks.thumbnail):('')} alt="book" className='book-cover'></img>
                            <div className="book-shelf-changer">
                              <select onChange={(event) => (this.props.shelfchange(book, event.target.value))} defaultValue={this.findShelf(this.props.books, book.id)}  >
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
);
    }
    
    
    
    
}
export default BookSearch;