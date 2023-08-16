import { React } from 'react';
import { useState, useRef, useEffect } from 'react';

function BookEdit({book, doEditBookTitle, tabIndex}) {
    const [title, setTitle] = useState(book.title);
    
    const titleEditRef = useRef(null);

    useEffect(() => {
        titleEditRef.current.focus();
        titleEditRef.current.select();
    },[]);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        doEditBookTitle(book.id, title);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <div className="level is-flex">
                <div className="level-left">
                    <input type="text" ref={titleEditRef} value={title} onChange={handleChange} tabIndex={tabIndex}></input>
                </div>
                <div className="level-right">
                    <button className="button is-small is-primary is-rounded ml-2">Save</button>
                </div>
            </div>
        </form>
    );
}

export default BookEdit;
