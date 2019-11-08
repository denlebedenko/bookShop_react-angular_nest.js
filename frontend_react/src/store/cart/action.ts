import TokenStorage from "../../services/token.storage";

const tokenStorage = new TokenStorage();
const bookIds = JSON.parse(tokenStorage.getBooks()) || [];

const addToCart = (id: string) => {

    bookIds.push(id);
    tokenStorage.setBooks(JSON.stringify(bookIds));

    return {
        type: 'ADD_TO_CART',
        payload: id,
    };
};


const removedFromCart = (id: string) => {

    const findBook = bookIds.findIndex((book: string) => book === id);
    bookIds.splice(findBook, 1);

    const bookString: string = JSON.stringify(bookIds);
    tokenStorage.setBooks(bookString);

    return {
        type: 'REMOVE_FROM_CART',
        payload: id,
    };
};

export {
    addToCart,
    removedFromCart,
}