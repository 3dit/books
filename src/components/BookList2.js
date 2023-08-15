import { React } from 'react';
import { useState } from 'react';
import BookShow from './BookShow';

function BookList({ createBook, deleteBook, books }) {
    let [name, setName] = useState('');

    function handleChange(event) {
        setName(event?.target?.value ?? '');
    }
    function handleSubmit(event) {
        event.preventDefault();
        createBook(name);
    }
    function doCreateBook(event) {
        event.preventDefault();
        createBook(name);
        setName('');
    }
    function doDelete(id) {
        deleteBook(id);
    }


    return (
        <div>
            <h1>Book List</h1>
            {GetBooks(books, doDelete)}
            <form className="level"  onSubmit={handleSubmit}>
                <div className="level-left">
                    <div className="level-item">
                        <p className="subtitle is-5">
                            <strong>Book Name</strong>
                        </p>
                    </div>
                    <div className="level-item">
                        <div className="field has-addons">
                            <p className="control">
                                <input className="input" type="text" value={name} onChange={handleChange} />
                            </p>
                            <p className="control">
                                <button className="button" onClick={doCreateBook}>Add</button>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

function GetBooks(books, doDelete) {
    return (
        <div>
            {
                books.map((book, index) => {
                    return (
                        <div className="columns" key={book.id}>
                            <div className="column is-four">

                                Title: {book.name}  [{book.id}]
                            </div>
                            <div className="column">
                                <p className="control">
                                    <button className="button is-small is-rounded is-danger" onClick={() => { doDelete(book.id) }}>delete</button>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

    export default BookList;
