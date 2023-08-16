import { useContext } from 'react'
import BooksContext from '../context/bookContext';

//Most basic example of a hook, this one isn't too useful.
//We could just use BooksContext directly which is almost easier than this which is confusing
const CoreContext = () => {
    return useContext(BooksContext);
}

export default CoreContext;