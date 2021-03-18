import React, {Component} from 'react';
import bookService from '../services/BookService';

class AddUpdateBookComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            description: '',
            price: ''
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
    }

    componentDidMount(){
        if (this.state.id === '_add'){
            return
        }
        else{
            bookService.getBookById(this.state.id).then(res => {
                let book = res.data;
                this.setState({title: book.title, description: book.description, price: book.price});
            });
        }
    }

    addUpdateBook = (e) =>{
        e.preventDefault();
        let book;

        if(this.state.id === '_add'){
            book = {title: this.state.title, description: this.state.description, price: this.state.price};
        }
        else{
            book = {id: this.state.id, title: this.state.title, description: this.state.description, price: this.state.price};
        }

        console.log(book);
        bookService.addUpdateBook(book).then(res => {
            this.props.history.push('/books');
        });
    }

    changeTitleHandler = (event) => {
        this.setState({title: event.target.value});
    }
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }
    changePriceHandler = (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Book</h3>
        }
        else{
            return <h3 className="text-center">Update Book</h3>
        }
    }

    render(){
        return(
            <div>
                <br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Title:</label>
                                        <input placeholder="Title" name="title" className="form-control" value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description:</label>
                                        <input placeholder="Description" name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Price:</label>
                                        <input placeholder="Price" name="price" className="form-control" value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.addUpdateBook}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUpdateBookComponent