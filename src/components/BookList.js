import { React } from 'react';
import BookShow from './BookShow';
import CoreContext from '../hooks/bookDataHook';

function BookList({ onSubmit }) {

    const { books, deleteBook  } = CoreContext();

    //We could do delete from BookShow. We already moved edit functionality
    //to BookShow. In the case of a simple app where cards have titels and no greater logic
    //is applied it wouldn't matter if BookList or BookShow handled these operations. But
    //in a more shophisticated app which would have to, say, ensure validation for something
    //like no two books cards have the same title, then it would make since for the higher level
    //BookList to handle edit and delete functionality to make it easier/cleaner to implement
    //such validation logic. BookShow wouldn't and shouldn't know if other 'cards/shows' already
    //contain a duplicate title. And if it did, it still may not be in a position to indicate a
    //error to the user: perhaps BookList or even App should be responsible for that.

    return (
        <div>
            <div className="columns is-multiline">
                {
                    books.map((book, index) => {
                        return (
                            <BookShow
                                book={book}
                                key={index}
                                doDelete={() => { deleteBook(book.id); }}
                            />)
                    })
                }
            </div>
        </div>
    );
}

export default BookList;
