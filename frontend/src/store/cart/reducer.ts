import TokenStorage from "../../services/token.storage";

const tokenStorage = new TokenStorage()

export interface CartState {
    books: number,
}

const bookIds = JSON.parse(tokenStorage.getBooks()) || [];
const amount = bookIds.length;
console.log()

const initialStore = {
    amount: amount,
}

const cartReducer = (state = initialStore, action:any) => {

    switch(action.type) {
        case 'ADD_TO_CART':
            const purchasedBookId = {
                ...state,
            }
            console.log(action.payload)
            return purchasedBookId;

        default:
            return {
                ...state
            };  
    }

    

}

export default cartReducer;