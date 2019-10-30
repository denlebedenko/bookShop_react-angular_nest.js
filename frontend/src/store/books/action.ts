import { QueryBook } from "../../models/query-books.model";

const changeFilter = (customFilter: QueryBook) => ({
    type:'GET_FILTER',
    payload: customFilter,
});


export {
    changeFilter
};