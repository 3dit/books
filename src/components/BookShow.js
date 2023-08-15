import { React } from 'react';
import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, doDelete, onSubmit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const doEditBookTitle = (id, newTitle) => {
        onSubmit(id, newTitle);
        setShowEdit(false);
        //titleEditRef.current.focus();
    }

    let level;

    level = (
        <div className="level">
            <div className="level-left">
                <h3 className="">{book.title} [{book.id}]</h3>
            </div>
            <div className="level-right">
                <button className="button is-small is-rounded" onClick={() => { handleEditClick() }}>edit</button>
                <button 
                    className="button is-small is-rounded is-danger ml-1" 
                    onClick={() => { doDelete(book.id) }}>X</button>
            </div>
        </div>
    );

    if (showEdit) {
        level = (
            <div className="level">
                <BookEdit book={book} doEditBookTitle={doEditBookTitle} />
            </div>
        );
    } 
    const GetBookCard = () => {
        let url = `https://picsum.photos/seed/${book.id}/200/200`;
        return (
            <div className="card">
                <div className="card-content">
                    {level}                    
                    <div className="content">
                        <img src={url} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="column is-one-third" key={book.id}>
            {GetBookCard()}
        </div>
    );
}

export default BookShow;
