import axios from 'axios';

const baseUrl = 'http://localhost:4000/books/';

class BookService {

    getBooks(){
        return axios.get(baseUrl + 'GetAll');
    }

    getBookById(bookId){
        return axios.get(baseUrl + 'GetById/' + bookId);
    }
    
    addUpdateBook(book){
        return axios.post(baseUrl + 'AddUpdate', book);
    }

    deleteBook(bookId){
        return axios.delete(baseUrl + 'DeleteById/' + bookId);
    }
}

export default new BookService();