import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function createBookData(title) {
    return { title: title };
}

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    //this version of useEffect (with empty array as parameter) will be called 1x once initial render is compelted, and only once
    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        let response = await axios.get('http://localhost:3001/books');
        console.log(response);
        setBooks(response.data);
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const newBooks = books.filter(item => item.id !== id);
        setBooks(newBooks);
    }

    const createBook = async (title) => {
        let response = await axios.post('http://localhost:3001/books', { title });
        //console.log('RESPONSE ', response);
        //let maxId = 0;
        //for (let i in books) { if (books[i].id > maxId) maxId = books[i].id; }
        //let newId = maxId + 1;
        //const book = createBookData(newId, title);
        let newBooks = [...books, response.data];
        setBooks(newBooks);
    }

    const editBook = async (bookId, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
            title: newTitle,
        })
        const newBooks = books.map((book) => {
            if (bookId == book.id) {
                return { ...book, ...response.data }
            }
            return book;
        });
        setBooks(newBooks);
    }

    const core = {
        books,
        setBooks: (newBooks) => {
            setBooks(newBooks);
        },
        deleteBook: (id) => {
            deleteBook(id);
        },
        createBook: (title) => {
            createBook(title);
        },
        editBook: (bookId, newTitle) => {
            editBook(bookId, newTitle);
        }
    };
    
    return (
        <BooksContext.Provider value={core} >
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
