const getBooks = (customFilter:any) => ({
    type:'GET_BOOKS',
    payload: customFilter,
});


export {
    getBooks
};