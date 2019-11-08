import { QueryBook } from "../../models/query-books.model";

const changeFilter = (customFilter: QueryBook) => ({
    type: 'GET_FILTER',
    payload: customFilter,
});

const resetFilter = () => ({
    type: 'RESET_FILTER',
});

export {
    changeFilter,
    resetFilter,
};