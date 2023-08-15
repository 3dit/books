//state utilities

const arrayInsertObjectAtIndex = (array, obj, index) => {
    const newArray = [...array.slice(0, index), obj, ...array.slice(index)];
    return newArray;
}

const arrayDeleteObjectWithPropOfValue = (array, prop, value) => {
    const newArray = array.filter((item) => item[prop] !== value);
    return newArray;
}

const arrayDeleteObjectAtIndex = (array, index) => {
    const newArray = array.filter((item, findex) => index !== findex);
    return newArray;
}

const arrayDeleteObjectWithValue = (array, value) => {
    const newArray = array.filter((item) => value !== item);
    return newArray;
}

const arrayAddObjectToStart = (array, object) => {
    const newArray = [object, ...array];
    return newArray;
}

const arrayAddObjectToEnd = (array, object) => {
    const newArray = [ ...array, object];
    return newArray;
}

//create new instance of object 'obj' without proprty 'propName'.
//'propName' can be an array with multiple names
const objectRemovePropertyByName = (obj, propName) => {
    const newObject = {};
    Object.keys(obj).filter((objProp) => (propName.length ?  !propName.includes(objProp) : (propName != objProp))).forEach((v,i) => newObject[v] = obj[v]);
    return newObject;
}


//example of changing property name of specific object in an array
const data = [
    { id:1, title:'fellowship of the ring' },
    { id:2, title: 'the two flowers' }
]
const changeTitleById = (id, newTitle) => {
    const updatedData = data.map((book) => {
        if(book.id == id) return { ...book, title: newTitle }
        return book;
    })
}
const newBookData = changeTitleById(2, 'the two towers');

//example of removing proeprty using object destruction
const book = { id:1, title:'the hobbit', bookNumber: 1};
const { bookNumber, ...rest} = book;
const updatedBook = rest;//setBook(rest) or setBook(updateBook)

export { 
    arrayInsertObjectAtIndex,
    arrayDeleteObjectWithPropOfValue,
    arrayDeleteObjectAtIndex,
    arrayDeleteObjectWithValue,
    arrayAddObjectToStart,
    arrayAddObjectToEnd,
    objectRemovePropertyByName
}
