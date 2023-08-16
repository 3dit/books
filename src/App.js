import { React } from 'react';
//import { useState, useEffect, useContext } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
//import * as utils from './helpers/stateUtils';
//import { Provider } from './context/bookContext';
//import BookContext from './context/bookContext';
import './App.css';
//import './bulma.css';
import './index.css';
//import axios from 'axios';

// function createBookData(id, title) {
//     return { id: id, title: title };
// }

//let initialBooks = [];
//initialBooks.push(createBookData(0, `gone with the tin`));

function App() {

    return (
        <div className="container m-2">
            <h1>Book Web App</h1>
            <div>
                <BookList/>
            </div>
            <BookCreate />
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