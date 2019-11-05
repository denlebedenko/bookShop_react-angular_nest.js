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

    switch(action.type) {
        case 'ADD_TO_CART':
        const bookId = action.payload;

            const purchasedBookId = {
                ...state,
                books: [
                    ...state.books,
                    bookId,
                ]
            }
            return purchasedBookId;

        default:
            return {
                ...state
            };  
    }

    

}

export default cartReducer;