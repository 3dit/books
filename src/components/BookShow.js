import { React } from 'react';
import { useState } from 'react';
import BookEdit from './BookEdit';
import CoreContext from '../hooks/bookDataHook';

function BookShow({ book, doDelete }) {
    const [showEdit, setShowEdit] = useState(false);

    //const { editBook } = useContext(BooksContext);
    const { editBook } = CoreContext();

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const doEditBookTitle = (id, newTitle) => {
        editBook(id, newTitle);
        setShowEdit(false);
    }

    const url = `https://picsum.photos/seed/${book.id}/200/200`;

    const CardHeader =
        showEdit ? (
            <div className="level">
                <BookEdit book={book} doEditBookTitle={doEditBookTitle} tabIndex="1" />
            </div>
        ) : (
            <div className="level">
                <div className="level-left">
                    <h3 onClick={handleEditClick} tabIndex="2">{book.title} [{book.id}]</h3>
                </div>
                <div className="level-right">
                    <button className="button is-small is-rounded" onClick={handleEditClick} tabIndex="3">edit</button>
                    <button
                        className="button is-small is-rounded is-danger ml-1"
                        onClick={() => { doDelete(book.id) }} tabIndex="4">X</button>
                </div>
            </div>
        );

    const GetBookCard =
        <div className="card">
            <div className="card-content">
                {CardHeader}
                <div className="content">
                    <img src={url} />
                </div>
            </div>
        </div>

    return (
        <div className="column is-one-third" key={book.id}>
            {GetBookCard}
        </div>
    )
}

export default BookShow;
