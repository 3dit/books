import { React } from 'react';
import { useState } from 'react';
import BookShow from './BookShow';

function BookList({ createBook, deleteBook, books, onSubmit }) {
    let [newTitle, setNewTitle] = useState('');

    function handleChange(event) {
        setNewTitle(event?.target?.value ?? '');
    }
    function handleSubmit(event) {
        event.preventDefault();
        createBook(newTitle);
    }
    function doCreateBook(event) {
        event.preventDefault();
        createBook(newTitle);
        setNewTitle('');
    }
    function doDelete(id) {
        deleteBook(id);
    }

    const breakup = (books)

    return (
        <div>
            <div className="columns is-multiline">
                {
                    books.map((book, index) => {
                        return (
                            <BookShow
                                book={book}
                                key={index}
                                doDelete={doDelete}
                                onSubmit={onSubmit}
                            />)
                    })
                }
            </div>
            <form className="level" onSubmit={handleSubmit}>
                <div className="level-left">
                    <div className="level-item">
                        <p className="subtitle is-5">
                            <strong>Book Title</strong>
                        </p>
                    </div>
                    <div className="level-item">
                        <div className="field has-addons">
                            <p className="control">
                                <input className="input" type="text" value={newTitle} onChange={handleChange} />
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

export default BookList;
