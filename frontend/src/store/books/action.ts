import { QueryBook } from "../../models/query-books.model";

const changeFilter = (customFilter:QueryBook) => ({
    type:'GET_BOOKS',
    payload: customFilter,
});


export {
    changeFilter
};