import { React } from 'react';
import { useState, useContext } from 'react';
//import BooksContext from '../context/bookContext';
import CoreContext from '../hooks/bookDataHook';

function BookCreate() {
    const { createBook } = CoreContext();
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
    return (
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
    )
}

export default BookCreate;
