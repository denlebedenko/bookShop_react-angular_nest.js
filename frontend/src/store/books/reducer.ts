import { QueryBook } from "../../models/query-books.model";

const initialQuery: QueryBook = {
    page: '1',
    minPrice: '',
    maxPrice: '',
    typeBook: '',
}

const reducer = (state: QueryBook = initialQuery, action: any) => {
    switch (action.type) {
        case 'GET_FILTER' :
            const newList = {
                ...state,
                page: action.payload.page,
                minPrice: action.payload.minPrice,
                maxPrice: action.payload.maxPrice,
                typeBook: action.payload.typeBook,
            }
            return newList

        case 'CHANGE_PAGE': 
            return {
                page: action.payload.page,
                ...state,
            }

        default:
            return {
                ...state
            }    
    }
}

export default reducer;