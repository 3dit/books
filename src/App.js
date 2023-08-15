import { React } from 'react';
import { useState, useEffect } from 'react';
import BookList from './components/BookList';
import * as utils from './helpers/stateUtils';
import './App.css';
//import './bulma.css';
import './index.css';
import axios from 'axios';

function createBookData(id, title) {
    return { id: id, title: title };
}

let initialBooks = [];
initialBooks.push(createBookData(0, `gone with the tin`));

function App() {

    //this version of useEffect (with empty array as parameter) will be called once initial render is compelted, and only once
    useEffect(() => {
        getBooks();
    }, []);

    let [books, setBooks] = useState(initialBooks);

    //getBooks();

    const getBooks = async () => {
        let response = await axios.get('http://localhost:3001/books');
        console.log(response);
        setBooks(response.data);
    }
    const createBook = async (title) => {
        await axios.post('http://localhost:3001/books', {
            title
        });
        let maxId = 0;
        for (let i in books) { if (books[i].id > maxId) maxId = books[i].id; }
        let newId = maxId + 1;
        const book = createBookData(newId, title);
        let newBooks = [...books, book];
        setBooks(newBooks);
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const newBooks = books.filter(item => item.id !== id);
        setBooks(newBooks);
    }

    const handleSubmit = async (bookId, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${bookId}`, {
            title: newTitle,
        })
        console.log('edit book ' + bookId + ' title to ' + newTitle);
        const newBooks = books.map((book) => {
            if (bookId == book.id) {
                return { ...book, ...response.data }
            }
            return book;
        });
        setBooks(newBooks);
    }

    return (
        <div className="container m-2">
            <h1>Book Web App</h1>
            <div className="XXXsection">
                <BookList
                    createBook={createBook}
                    deleteBook={deleteBook}
                    onSubmit={handleSubmit}
                    books={books}
                />
            </div>
            <footer className="footer">
                <div className="content has-text-centered is-small">
                    <p>
                        <strong>WebDev Inc</strong> &copy; 2023. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>

    );
}

export default App;