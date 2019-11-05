import TokenStorage from "../../services/token.storage";

const tokenStorage = new TokenStorage();
const bookIds= JSON.parse(tokenStorage.getBooks()) || [];

const addToCart = (id:string) => {

    bookIds.push(id);
    tokenStorage.setBooks(JSON.stringify(bookIds));

    return {
        type: 'ADD_TO_CART',
        payload: id,
    };
};

export { 
    addToCart,
}