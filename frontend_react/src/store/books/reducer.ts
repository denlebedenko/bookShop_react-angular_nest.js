import { QueryBook } from "../../models/filter/query-books.model";
import { AppAction } from "models/state/app-action.model";

const initialQuery: QueryBook = {
    page: '1',
    minPrice: '',
    maxPrice: '',
    typeBook: '',
}

const queryReducer = (state: QueryBook = initialQuery, action: AppAction) => {
    switch (action.type) {
        case 'GET_FILTER':
            const newList = {
                minPrice: action.payload.minPrice,
                maxPrice: action.payload.maxPrice,
                typeBook: action.payload.typeBook,
            };
            return newList;

        case 'CHANGE_PAGE':
            return {
                page: action.payload.page,
                ...state,
            };
        case 'RESET_FILTER':
            const defaultList = {
                ...state,
                minPrice: '',
                maxPrice: '',
                typeBook: '',
            };
            return defaultList;


        default:
            return {
                ...state
            };
    };
};

export default queryReducer;