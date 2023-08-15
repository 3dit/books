import { React } from 'react';
import { useState, useRef, useEffect } from 'react';

function BookEdit({book, doEditBookTitle}) {
    const [title, setTitle] = useState(book.title);

    
    const titleEditRef = useRef(null);

    useEffect(() => {
        titleEditRef.current.focus();
        console.log(titleEditRef.current);
        titleEditRef.current.select();
    },[]);

    const handleChange = (event) => {
        setTitle(event.target.value);
        //editBookTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('new title is ', title);
        doEditBookTitle(book.id, title);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <div className="level is-flex">
                <div className="level-left">
                    <input type="text" ref={titleEditRef} value={title} onChange={handleChange}></input>
                </div>
                <div className="level-right">
                    <button className="button is-small is-primary is-rounded ml-2">Save</button>
                </div>
            </div>
        </form>
    );
}

export default BookEdit;
