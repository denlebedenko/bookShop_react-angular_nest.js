import TokenStorage from "../../services/token.storage";

const tokenStorage = new TokenStorage()

export interface CartState {
    books: string[],
}

const bookIds = JSON.parse(tokenStorage.getBooks()) || [];


const initialStore:CartState = {
    books: bookIds,
}

const cartReducer = (state:CartState = initialStore, action:any) => {
        const bookId = action.payload;
    switch(action.type) {
        case 'ADD_TO_CART':

            const purchasedBookId = {
                ...state,
                books: [
                    ...state.books,
                    bookId,
                ],
            };
            return purchasedBookId;

        case 'REMOVE_FROM_CART': 
            const findBook = state.books.findIndex((book: string) => book === bookId);

            const newList = {
                ...state,
                books: [
                    ...state.books.filter( (id,index) => index !== findBook),
                ],
            };

            return newList;

        default:
            return {
                ...state
            };  
    }

    

}

export default cartReducer;