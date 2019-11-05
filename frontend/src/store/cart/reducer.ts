import TokenStorage from "../../services/token.storage";

const tokenStorage = new TokenStorage()

export interface CartState {
    books: number,
}

const bookIds = JSON.parse(tokenStorage.getBooks()) || [];
const amount = bookIds.length;

const initialStore = {
    amount: amount,
}

const cartReducer = (state = initialStore, action:any) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            const purchasedBookId = {
                ...state,
            }
            return purchasedBookId;

        default:
            return {
                ...state
            };  
    }

    

}

export default cartReducer;