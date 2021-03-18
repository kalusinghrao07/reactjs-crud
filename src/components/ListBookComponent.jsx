import React, { Component } from 'react';
import bookservice from '../services/BookService';
import bookService from '../services/BookService';

class ListBookComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            books: []
        }

        this.addBook = this.addBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    deleteBook(bookId){
        bookService.deleteBook(bookId).then(res => {
            this.setState({ books: this.state.books.filter(bk => bk.id !== bookId)});
        });
    }

    viewBook(bookId){
        this.props.history.push(`/view-book/${bookId}`);
    }

    addBook(){
        this.props.history.push('/add-book/_add');
    }

    updateBook(bookId){
        this.props.history.push(`/add-book/${bookId}`);
    }

    componentDidMount(){
        bookservice.getBooks().then(res => {
            this.setState({books: res.data});
        });
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Book List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addBook}>Add Book</button>
                </div>
                <br/><br/>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book => 
                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.description}</td>
                                        <td>{book.price}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => this.updateBook(book.id)}>Update</button>
                                            <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => this.deleteBook(book.id)}>Delete</button>
                                            <button className="btn btn-info" style={{marginLeft: "10px"}} onClick={() => this.viewBook(book.id)}>View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListBookComponent
